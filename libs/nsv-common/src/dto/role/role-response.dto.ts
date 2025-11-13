import { PickType } from '@nestjs/swagger';
import { RoleBaseDto } from './role-base.dto';

export class RoleBriefResponseDto extends PickType(RoleBaseDto, [
  'id',
  'name',
  'slug',
]) {}
