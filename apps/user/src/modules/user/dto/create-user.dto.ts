import { Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsDateString,
  IsEnum,
  MinLength,
  MaxLength,
  Matches,
  IsUUID,
} from 'class-validator';
import { USER } from '@phanhotboy/nsv-common';

// Base DTO for user creation
export class CreateUserDto {
  // Properties from RegisterUserDto and PasswordUserDto should be defined here
  @IsUUID('4', { message: 'ID không hợp lệ' })
  id?: string;

  @IsEmail({}, { message: 'Email không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  email!: string;

  @IsString({ message: 'Tên đăng nhập phải là chuỗi' })
  @MinLength(3, { message: 'Tên đăng nhập phải có ít nhất 3 ký tự' })
  @MaxLength(20, { message: 'Tên đăng nhập không được quá 20 ký tự' })
  @Matches(/^[a-zA-Z0-9_]{3,20}$/, {
    message: 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới',
  })
  @Transform(({ value }) => value?.trim())
  username!: string;

  @IsString({ message: 'Slug phải là chuỗi' })
  slug!: string;

  @IsString({ message: 'Tên phải là chuỗi' })
  @MinLength(1, { message: 'Tên là bắt buộc' })
  @Transform(({ value }) => value?.trim())
  firstName!: string;

  @IsOptional()
  @IsString({ message: 'Họ phải là chuỗi' })
  @Transform(({ value }) => value?.trim() || '')
  lastName?: string;

  @IsOptional()
  @IsUUID('4', { message: 'ID avatar không hợp lệ' })
  avatarId?: string;

  @IsOptional()
  @IsString({ message: 'Địa chỉ phải là chuỗi' })
  @MaxLength(512, { message: 'Địa chỉ không được quá 512 ký tự' })
  address?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Ngày sinh không hợp lệ' })
  @Transform(({ value }) => (value ? new Date(value) : undefined))
  birthdate?: Date;

  @IsOptional()
  @IsString({ message: 'Số điện thoại phải là chuỗi' })
  @Matches(/^(\+84|0)[3|5|7|8|9][0-9]{8}$/, {
    message: 'Số điện thoại không hợp lệ',
  })
  @Transform(({ value }) => value?.trim())
  msisdn?: string;

  @IsOptional()
  @IsEnum(Object.values(USER.SEX), {
    message: 'Giới tính không hợp lệ',
  })
  sex?: Values<typeof USER.SEX>;

  @IsEnum(Object.values(USER.STATUS), {
    message: 'Trạng thái không hợp lệ',
  })
  status!: Values<typeof USER.STATUS>;

  @IsOptional()
  @IsUUID('4', { message: 'ID vai trò không hợp lệ' })
  roleId!: string;
}
