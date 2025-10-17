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
import { CreateUserDto } from './create-user.dto';
import { UserSex, UserStatus } from '@server-prisma/index';

export class UpdateUserDto implements Partial<CreateUserDto> {
  // Properties from RegisterUserDto and PasswordUserDto should be defined here
  @IsOptional()
  @IsEmail({}, { message: 'Email không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  email?: string;

  @IsOptional()
  @IsString({ message: 'Mật khẩu phải là chuỗi' })
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password?: string;

  @IsOptional()
  @IsString({ message: 'Tên đăng nhập phải là chuỗi' })
  @MinLength(3, { message: 'Tên đăng nhập phải có ít nhất 3 ký tự' })
  @MaxLength(20, { message: 'Tên đăng nhập không được quá 20 ký tự' })
  @Matches(/^[a-zA-Z0-9_]{3,20}$/, {
    message: 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới',
  })
  @Transform(({ value }) => value?.trim())
  username?: string;

  @IsOptional()
  @IsString({ message: 'Slug phải là chuỗi' })
  slug?: string;

  @IsOptional()
  @IsString({ message: 'Tên phải là chuỗi' })
  @MinLength(1, { message: 'Tên là bắt buộc' })
  @Transform(({ value }) => value?.trim())
  firstName?: string;

  @IsOptional()
  @IsString({ message: 'Họ phải là chuỗi' })
  @Transform(({ value }) => value?.trim() || '')
  lastName?: string;

  @IsString()
  salt?: string;

  @IsOptional()
  @IsUUID('4', { message: 'ID avatar không hợp lệ' })
  avatar?: string;

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
  @IsEnum(Object.values(UserSex), {
    message: 'Giới tính không hợp lệ',
  })
  sex?: Values<typeof UserSex>;

  @IsOptional()
  @IsEnum(Object.values(UserStatus), {
    message: 'Trạng thái không hợp lệ',
  })
  status?: Values<typeof UserStatus>;

  @IsOptional()
  role?: string;
}
