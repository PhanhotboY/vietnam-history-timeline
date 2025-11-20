import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { Permissions } from '@phanhotboy/nsv-jwt-auth';
import {
  ArrayValidationPipe,
  GrantBaseCreateDto,
  RoleBaseCreateDto,
  RoleBaseDto,
  Serialize,
} from '@phanhotboy/nsv-common';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @Permissions(['role', 'createAny'])
  @Serialize(RoleBaseDto)
  createRole(@Body() roleData: RoleBaseCreateDto) {
    return this.roleService.createRole(roleData);
  }

  @Get()
  @Permissions(['role', 'readAny'])
  @Serialize(RoleBaseDto)
  getRoles() {
    return this.roleService.getRoles();
  }

  @Get(':id')
  @Permissions(['role', 'readAny'])
  @Serialize(RoleBaseDto)
  getRoleById(@Param('id') id: string) {
    return this.roleService.getRoleById(id);
  }

  @Delete(':id')
  @Permissions(['role', 'deleteAny'])
  @Serialize(RoleBaseDto)
  deleteRole(@Param('id') id: string) {
    return this.roleService.deleteRole(id);
  }

  @Post(':id/grants')
  @Permissions(['role', 'updateAny'])
  addGrants(
    @Param('id') id: string,
    @Body(ArrayValidationPipe(GrantBaseCreateDto)) grants: GrantBaseCreateDto[],
  ) {
    return this.roleService.addRoleGrants(id, grants);
  }

  @Delete(':roleId/grants/:resourceId')
  @Permissions(['role', 'updateAny'])
  deleteRoleGrant(
    @Param('roleId') roleId: string,
    @Param('resourceId') resourceId: string,
  ) {
    return this.roleService.deleteRoleGrant(roleId, resourceId);
  }
}
