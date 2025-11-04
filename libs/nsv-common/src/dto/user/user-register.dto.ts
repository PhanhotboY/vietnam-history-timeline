import { Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsEnum,
  MinLength,
  MaxLength,
  Matches,
  IsUUID,
} from 'class-validator';
import { UserPasswordDto } from './user-password.dto';
import { USER } from '../../constants';

// Base DTO for user creation
export class UserRegisterDto implements UserPasswordDto {
  @IsUUID('4', { message: 'ID không hợp lệ' })
  id?: string;

  @IsEmail({}, { message: 'Email không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  email!: string;

  @IsString({ message: 'Mật khẩu phải là chuỗi' })
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password!: string;

  @IsString({ message: 'Tên đăng nhập phải là chuỗi' })
  @MinLength(3, { message: 'Tên đăng nhập phải có ít nhất 3 ký tự' })
  @MaxLength(100, { message: 'Tên đăng nhập không được quá 100 ký tự' })
  @Matches(/^[a-zA-Z0-9_]{3,20}$/, {
    message: 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới',
  })
  @Transform(({ value }) => value?.trim())
  username!: string;

  @IsString()
  salt!: string;

  @IsEnum(Object.values(USER.STATUS), {
    message: 'Trạng thái không hợp lệ',
  })
  status!: Values<typeof USER.STATUS>;

  @IsUUID('4', { message: 'ID vai trò không hợp lệ' })
  roleId!: string;
}
