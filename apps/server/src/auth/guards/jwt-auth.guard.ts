import {
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { APP } from '@shared/constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
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
      return true;
    }

    return super.canActivate(context);
  }
}
