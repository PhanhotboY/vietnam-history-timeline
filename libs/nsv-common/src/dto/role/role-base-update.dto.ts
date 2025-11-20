import { PartialType } from '@nestjs/swagger';
import { RoleBaseCreateDto } from './role-base-create.dto';

export class RoleBaseUpdateDto extends PartialType(RoleBaseCreateDto) {}
