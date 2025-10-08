import { Controller, Get } from '@nestjs/common';
import { RoleService } from './role.service';
import { Permissions } from '@/common/decorators';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  @Permissions(['role', 'readAny'])
  getRoles() {
    return this.roleService.getRoles();
  }
}
