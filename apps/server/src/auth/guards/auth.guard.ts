import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { APP, HEADER } from '@shared/constants';
import { JwtHelperService } from '@/common';
import { KeyTokenService } from '@/modules/key-token/key-token.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtHelper: JwtHelperService,
    private readonly reflector: Reflector,
    private readonly keyTokenService: KeyTokenService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const metadata =
      this.reflector.getAllAndOverride<string[]>('AuthMetadata', [
        context.getHandler(),
        context.getClass(),
      ]) || [];

    if (!Array.isArray(metadata)) {
      // Nếu không có metadata, không cho phép truy cập
      throw new InternalServerErrorException('Server error');
    }

    const req = context.switchToHttp().getRequest<Request>();
    if (metadata.includes(APP.BYPASS_AUTHENTICATION)) {
      req.user = {
        userId: 'anonymous',
        email: 'anonymous',
        browserId: 'anonymous',
      };
      return true;
    }

    // const req = context.switchToHttp().getRequest<Request>();

    const clientId = req.headers[HEADER.CLIENT_ID] as string;
    if (!clientId) throw new UnauthorizedException('Invalid request');

    const accessToken = req.headers[HEADER.AUTHORIZATION] as string;
    if (!accessToken) throw new UnauthorizedException('Invalid request');

    const token = accessToken.startsWith('Bearer ')
      ? accessToken.slice(7, accessToken.length)
      : accessToken;
    const { userId, browserId } = this.jwtHelper.parseAuthJwt(token);
    if (clientId !== userId) throw new UnauthorizedException('Invalid token');

    const keyToken = await this.keyTokenService.findByUserId(userId, browserId);
    if (!keyToken) throw new BadRequestException('Invalid request');
    const { email } = this.jwtHelper.verifyJwt(token, keyToken.publicKey);

    req.user = { userId, email, browserId };
    req.keyToken = keyToken;

    return true;
  }
}
