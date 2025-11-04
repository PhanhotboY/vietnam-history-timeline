import { Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsEnum,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { UserStatus } from '@auth-prisma';

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

  @IsString()
  salt?: string;

  @IsOptional()
  @IsEnum(Object.values(UserStatus), {
    message: 'Trạng thái không hợp lệ',
  })
  status?: Values<typeof UserStatus>;

  @IsOptional()
  role?: string;
}
