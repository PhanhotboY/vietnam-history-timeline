import { PartialType } from '@nestjs/swagger';
import { UserFullCreateDto } from './user-full-create.dto';

export class UserFullUpdateDto extends PartialType(UserFullCreateDto) {}
