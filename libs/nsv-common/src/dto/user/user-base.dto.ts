import { Exclude, Expose, Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsEnum,
  MinLength,
  IsUUID,
} from 'class-validator';
import { USER } from '../../constants';

// Base DTO for user creation
@Exclude()
export class UserBaseDto {
  @Expose()
  @IsUUID('4', { message: 'ID không hợp lệ' })
  id?: string;

  @Expose()
  @IsEmail({}, { message: 'Email không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  email!: string;

  @Expose()
  @IsString({ message: 'Slug phải là chuỗi' })
  slug!: string;

  @Expose()
  @IsString({ message: 'Tên phải là chuỗi' })
  @MinLength(1, { message: 'Tên là bắt buộc' })
  @Transform(({ value }) => value?.trim())
  firstName!: string;

  @Expose()
  @IsOptional()
  @IsString({ message: 'Họ phải là chuỗi' })
  @Transform(({ value }) => value?.trim() || '')
  lastName?: string | null;

  @Expose()
  @IsOptional()
  @IsUUID('4', { message: 'Avatar không hợp lệ' })
  avatarId?: string;

  @Expose()
  @IsEnum(Object.values(USER.STATUS), {
    message: 'Trạng thái không hợp lệ',
  })
  status!: Values<typeof USER.STATUS>;
}
