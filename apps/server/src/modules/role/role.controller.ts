import { Controller, Get } from '@nestjs/common';
import { RoleService } from './role.service';
import { SetAuthMetadata } from '@/common/decorators/auth.metadata.decorator';
import { APP } from '@shared/constants';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  @SetAuthMetadata(APP.BYPASS_AUTHENTICATION)
  getRoles() {
    return this.roleService.getRoles();
  }
}
