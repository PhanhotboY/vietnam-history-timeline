import { PartialType } from '@nestjs/swagger';
import { GrantBaseCreateDto } from './grant-base-create.dto';

export class GrantBaseUpdateDto extends PartialType(GrantBaseCreateDto) {}
