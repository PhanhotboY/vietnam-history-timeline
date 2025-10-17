import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { Permissions } from '@/common/decorators';
import { CreateRoleDto, GrantDto } from '@shared/dto/role';
import { ArrayValidationPipe } from '@/common/pipes';

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
