import { PickType } from '@nestjs/swagger';
import { UserFullDto } from './user-full.dto';

export class UserFullResponseDto extends PickType(UserFullDto, [
  'id',
  'email',
  'slug',
  'firstName',
  'lastName',
  'status',
  'address',
  'birthdate',
  'msisdn',
] as const) {
  avatar: string | null;
}
