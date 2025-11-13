import { OmitType } from '@nestjs/swagger';
import { UserAuthDto } from './user-auth.dto';

export class UserAuthCreateDto extends OmitType(UserAuthDto, ['id'] as const) {}
