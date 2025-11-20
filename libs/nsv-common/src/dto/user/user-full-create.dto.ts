import { OmitType } from '@nestjs/swagger';
import { UserFullDto } from './user-full.dto';
import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class UserFullCreateDto extends OmitType(UserFullDto, [
  'id',
  'createdAt',
  'updatedAt',
  'slug',
] as const) {
  @Expose()
  @IsOptional()
  slug?: UserFullDto['slug'];
}
