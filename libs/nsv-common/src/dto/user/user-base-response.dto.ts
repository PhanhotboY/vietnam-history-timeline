import { PickType } from '@nestjs/swagger';
import { UserBaseDto } from './user-base.dto';

export class UserBaseResponseDto extends PickType(UserBaseDto, [
  'id',
  'firstName',
  'lastName',
  'slug',
]) {}
