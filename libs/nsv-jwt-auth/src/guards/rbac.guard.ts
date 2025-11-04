import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AccessControl, Permission, Query } from 'accesscontrol';
import { Reflector } from '@nestjs/core';
import { Permissions } from '../decorators';
import { APP } from '@phanhotboy/nsv-common';
import { JwtPayloadDto, JwtPermissionDto } from '../dto';
import { Request } from 'express';

@Injectable()
export class RbacGuard implements CanActivate {
  private ac: AccessControl = new AccessControl();

  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const metadata =
      this.reflector.getAllAndOverride<string[]>('AuthMetadata', [
        context.getHandler(),
        context.getClass(),
      ]) || [];

    if (metadata.includes(APP.BYPASS_AUTHENTICATION)) {
      return true;
    }

    const [resource, action] =
      this.reflector.get(Permissions, context.getHandler()) || [];
    if (!resource || !action) {
      // Nếu không có metadata, không cho phép truy cập
      return false;
    }

    const req = context.switchToHttp().getRequest<Request>();
    const user = req.user as JwtPayloadDto;
    if (!user) {
      throw new ForbiddenException('Access denied');
    }

    return this.checkPermission(user.permissions, resource, action);
  }

  checkPermission(
    permissions: JwtPermissionDto[],
    resource: string,
    action: keyof Query
  ) {
    if (!permissions || permissions.length === 0) {
      throw new ForbiddenException('Access denied');
    }
    const role = permissions[0]?.role;
    if (!role) {
      throw new ForbiddenException('Access denied');
    }

    // Kiểm tra quyền truy cập
    this.ac.setGrants(permissions);
    const permission = this.ac.can(role)[action](resource) as Permission;
    if (permission.granted) {
      // Nếu có quyền phù hợp, tiếp tục xử lý
      return true;
    }

    // Nếu không có quyền phù hợp, trả về lỗi
    return false;
  }
}
