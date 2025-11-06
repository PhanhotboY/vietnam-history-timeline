import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserStatus } from '@auth-prisma';

import { CreateKeyTokenDto } from '@auth/modules/key-token/dto';
import { JwtPayloadDto, SignUpDto } from '@auth/auth/dto';
import { KeyTokenService } from '@auth/modules/key-token';
import { MailService } from '../mail';
import { UserService } from '@auth/modules/user';
import { RoleService } from '@auth/modules/role';
import { OtpService } from '@auth/modules/otp';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import {
  ConfigService,
  UserRegisterDto,
  UtilService,
  RMQ,
  USER_EVENT,
} from '@phanhotboy/nsv-common';
import { AuthUtilService } from '@phanhotboy/nsv-jwt-auth';
import { Config } from '@auth/config';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from '@auth/modules/user/dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly otpService: OtpService,
    private readonly roleService: RoleService,
    private readonly keyTokenService: KeyTokenService,
    private readonly mailService: MailService,
    private readonly utilService: UtilService,
    private readonly authUtilService: AuthUtilService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<Config>,
    @Inject(RMQ.TOPIC_EVENTS_EXCHANGE) private readonly rmq: ClientProxy,
  ) {}

  async signIn(payload: JwtPayloadDto, refreshToken?: string) {
    const user = await this.userService.findUserById(payload.userId, {
      withRole: true,
    });
    const permissions = await this.roleService.getPermissions(user.role.slug);

    const tokens = this.authUtilService.createTokenPair({
      payload: {
        userId: user.id,
        email: user.email,
        browserId: payload.browserId,
        permissions,
      },
      privateKey: this.configService.get('jwt.privateKey'),
    });

    const keyTokenCreate: CreateKeyTokenDto = {
      userId: payload.userId,
      browserId: payload.browserId,
      refreshToken: tokens.refreshToken,
      refreshTokensUsed: [],
    };

    if (refreshToken) keyTokenCreate.refreshTokensUsed.push(refreshToken);

    await this.keyTokenService.createKeyToken(keyTokenCreate);

    return {
      user: instanceToPlain<{
        id: string;
        email: string;
        role: { name: string; slug: string };
      }>(user),
      tokens,
    };
  }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUserById(username, {
      withPassword: true,
    });
    if (user && bcrypt.compareSync(password, user.password!)) {
      const { password, salt, ...result } = user;
      return result;
    }
    return null;
  }

  async signUp({ email }: SignUpDto) {
    const foundUser = await this.userService.findUserByEmail(email);
    if (foundUser) {
      throw new BadRequestException('Email already exists');
    }

    await this.mailService.sendVerificationEmail(email);

    return { success: true };
  }

  async verifyEmailToken({ token }: { token: string }) {
    if (!token) {
      throw new BadRequestException('Invalid token');
    }

    const foundOtp = await this.otpService.getOTPByToken(token);
    if (!foundOtp) {
      throw new BadRequestException('Invalid token');
    }
    const { email } = foundOtp;
    await this.otpService.deleteOTPByEmail(email);

    const foundUser = await this.userService.findUserByEmail(email);
    if (foundUser) {
      throw new BadRequestException('Email already exists');
    }

    const role = await this.roleService.getRoleById('admin');
    if (!role) {
      throw new InternalServerErrorException('Fail to get role!');
    }

    const salt = bcrypt.genSaltSync(10);
    const tempPass = randomBytes(8).toString('hex');
    const hashPassword = await bcrypt.hash(tempPass, salt);

    const userData = plainToInstance(CreateUserDto, {
      email,
      username: email,
      password: hashPassword,
      salt: salt,
      status: UserStatus.ACTIVE,
      roleId: role.id,
    });

    const newUser = await this.userService.createUser(userData);

    this.rmq.emit(
      USER_EVENT.REGISTERED,
      plainToInstance(UserRegisterDto, newUser),
    );

    if (!newUser) {
      throw new InternalServerErrorException('Fail to create new user!');
    }

    await this.mailService.sendTempPassEmail(email, {
      username: email,
      password: tempPass,
    });

    return {
      ok: true,
    };
  }

  async signOut(id: string) {
    return await this.keyTokenService.removeKeyById(id);
  }

  async refreshTokenHandler({
    clientId,
    refreshToken,
  }: {
    clientId: string;
    refreshToken: string;
  }) {
    // Check if refreshToken is missing
    if (!refreshToken) {
      throw new BadRequestException('Invalid request.');
    }
    // Check if userId is missing
    if (!clientId) {
      throw new BadRequestException('Invalid request.');
    }
    // Check if refreshToken data is valid
    const { userId, browserId } =
      this.jwtService.decode<JwtPayloadDto>(refreshToken);
    if (userId !== clientId) {
      throw new BadRequestException('Invalid request.');
    }

    // find user by id
    const foundUser = await this.userService.findUserById(userId);
    if (!foundUser) {
      throw new BadRequestException('Invalid request.');
    }

    // Check KeyToken in DB
    const keyToken = await this.keyTokenService.findByUserId(
      clientId,
      browserId,
    );
    if (!keyToken) {
      throw new BadRequestException('Invalid request.');
    }

    // Check if refreshToken has been used?
    if (keyToken.refreshTokensUsed.includes(refreshToken)) {
      // The token is used for the second time => malicious behavior => require user to log in again
      await this.keyTokenService.removeKeyById(keyToken.id);
      throw new ForbiddenException(
        'Something wrong happened. Please login again!!',
      );
    }

    // The token is used for the first time => valid
    // Token not exists in DB
    if (keyToken.refreshToken !== refreshToken)
      throw new BadRequestException('Invalid request.');

    // Verify refreshToken
    const { email } = this.jwtService.verify<JwtPayloadDto>(refreshToken, {
      publicKey: this.configService.get('jwt.publicKey'),
    });
    if (!email) {
      throw new BadRequestException('Invalid request.');
    }

    const permissions = await this.roleService.getPermissions(
      foundUser.role.slug,
    );
    // Token exists in DB
    const tokens = this.authUtilService.createTokenPair({
      payload: { userId, email, browserId, permissions },
      privateKey: this.configService.get('jwt.privateKey'),
    });

    await this.keyTokenService.updateRefreshToken(
      keyToken.id,
      refreshToken,
      tokens.refreshToken,
    );

    return {
      user: this.utilService.getReturnData(foundUser, {
        fields: ['id', 'email', 'role'],
      }),
      tokens,
    };
  }
}
