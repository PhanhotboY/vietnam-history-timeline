import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { instanceToPlain } from 'class-transformer';
import { JwtPayloadDto } from '@shared/dto/auth';
import { Request } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // the passport-local strategy by default expects properties called username and password in the request body
    super({
      passReqToCallback: true,
    });
  }

  authenticate(req: Request, options?: any): void {
    const { username, password, browserId } = req.body;
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

    // assigned to req.user
    return instanceToPlain<JwtPayloadDto>({
      ...validatedUser,
      userId: validatedUser.id,
      browserId,
    });
  }
}
