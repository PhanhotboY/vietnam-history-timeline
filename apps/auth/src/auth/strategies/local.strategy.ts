import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { JwtPayloadDto, SignInDto } from '@phanhotboy/nsv-common/dto';
import { Request } from 'express';
import { RoleService } from '../../modules/role/role.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private readonly roleService: RoleService,
  ) {
    // the passport-local strategy by default expects properties called username and password in the request body
    super({
      passReqToCallback: true,
    });
  }

  authenticate(req: Request, options?: any): void {
    const { username, password, browserId } = plainToInstance(
      SignInDto,
      req.body,
    );
    if (!username || !password) {
      throw new BadRequestException('Tên đăng nhập và mật khẩu là bắt buộc!');
    }
    if (!browserId) {
      throw new BadRequestException('Yêu cầu không hợp lệ!');
    }
    super.authenticate(req, options);
  }

  async validate(req: Request, username: string, password: string) {
    const browserId = req.body.browserId;

    const validatedUser = await this.authService.validateUser(
      username,
      password,
    );
    if (!validatedUser) {
      throw new BadRequestException('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
    const permissions = await this.roleService.getPermissions(
      validatedUser.roleId,
    );

    // assigned to req.user
    return instanceToPlain<JwtPayloadDto>({
      ...validatedUser,
      userId: validatedUser.id,
      browserId,
      permissions,
    });
  }
}
