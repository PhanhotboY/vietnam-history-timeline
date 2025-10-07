import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccessControl, Permission, Query } from 'accesscontrol';
import { UserService } from '@/modules/user';
import { RoleService } from '@/modules/role/role.service';
import { Reflector } from '@nestjs/core';
import { Permissions } from '@/common/decorators/permission.decorator';
import { Request } from 'express';

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userService: UserService,
    private readonly roleService: RoleService,
    @Inject('ACCESS_CONTROL') private readonly ac: AccessControl,
  ) {}

  async canActivate(context: ExecutionContext) {
    const [resource, action] =
      this.reflector.get(Permissions, context.getHandler()) || [];
    if (!resource || !action) {
      // Nếu không có metadata, không cho phép truy cập
      return true;
    }

    const req = context.switchToHttp().getRequest<Request>();
    const userId = req.user?.userId;

    return this.checkPermission(userId, resource, action);
  }

  async checkPermission(userId: string, resource: string, action: keyof Query) {
    // Lấy thông tin user và populate roles
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const permissions = await this.roleService.getPermissions(
      user.role?.slug || '',
    );
    if (!permissions || permissions.length === 0) {
      throw new ForbiddenException('Access denied');
    }

    console.log(permissions);
    // Kiểm tra quyền truy cập
    this.ac.setGrants(permissions);
    const permission = this.ac
      .can(user.role?.slug || '')
      [action](resource) as Permission;
    if (permission.granted) {
      // Nếu có quyền phù hợp, tiếp tục xử lý
      return true;
    }

    // Nếu không có quyền phù hợp, trả về lỗi
    return false;
  }
}
