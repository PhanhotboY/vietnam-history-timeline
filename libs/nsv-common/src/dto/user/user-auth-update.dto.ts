import { PartialType } from '@nestjs/swagger';
import { UserAuthCreateDto } from './user-auth-create.dto';

export class UserAuthUpdateDto extends PartialType(UserAuthCreateDto) {}
