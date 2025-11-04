import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto, GrantDto } from '@auth/modules/role/dto';
import { Permissions } from '@phanhotboy/nsv-jwt-auth';
import { ArrayValidationPipe } from '@phanhotboy/nsv-common';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @Permissions(['role', 'createAny'])
  createRole(@Body() roleData: CreateRoleDto) {
    return this.roleService.createRole(roleData);
  }

  @Get()
  @Permissions(['role', 'readAny'])
  getRoles() {
    return this.roleService.getRoles();
  }

  @Get(':id')
  @Permissions(['role', 'readAny'])
  getRoleById(@Param('id') id: string) {
    return this.roleService.getRoleById(id);
  }

  @Post(':id/grants')
  @Permissions(['role', 'updateAny'])
  addGrants(
    @Param('id') id: string,
    @Body(ArrayValidationPipe(GrantDto)) grants: GrantDto[],
  ) {
    return this.roleService.addRoleGrants(id, grants);
  }

  @Delete(':id')
  @Permissions(['role', 'deleteAny'])
  deleteRole(@Param('id') id: string) {
    return this.roleService.deleteRole(id);
  }
}
