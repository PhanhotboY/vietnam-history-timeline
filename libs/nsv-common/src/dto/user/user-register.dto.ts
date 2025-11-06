import { Exclude, Expose, Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsEnum,
  MinLength,
  MaxLength,
  Matches,
  IsUUID,
} from 'class-validator';
import { USER } from '../../constants';

// Base DTO for user creation
@Exclude()
export class UserRegisterDto {
  @Expose()
  @IsUUID('4', { message: 'ID không hợp lệ' })
  id?: string;

  @Expose()
  @IsEmail({}, { message: 'Email không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  email!: string;

  @Expose()
  @IsString({ message: 'Tên đăng nhập phải là chuỗi' })
  @MinLength(3, { message: 'Tên đăng nhập phải có ít nhất 3 ký tự' })
  @MaxLength(100, { message: 'Tên đăng nhập không được quá 100 ký tự' })
  @Matches(/^[a-zA-Z0-9_]{3,20}$/, {
    message: 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới',
  })
  @Transform(({ value }) => value?.trim())
  username!: string;

  @Expose()
  @IsEnum(Object.values(USER.STATUS), {
    message: 'Trạng thái không hợp lệ',
  })
  status!: Values<typeof USER.STATUS>;

  @Expose()
  @IsUUID('4', { message: 'ID vai trò không hợp lệ' })
  roleId!: string;
}
