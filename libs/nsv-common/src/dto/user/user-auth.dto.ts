import { Exclude, Expose, Transform } from 'class-transformer';
import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsUUID,
} from 'class-validator';
import { UserBaseDto } from './user-base.dto';
import { PickType } from '@nestjs/swagger';

// Base DTO for user creation
@Exclude()
export class UserAuthDto extends PickType(UserBaseDto, [
  'id',
  'email',
  'status',
] as const) {
  @Expose()
  @IsString({ message: 'Mật khẩu phải là chuỗi' })
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password!: string;

  @IsString()
  salt!: string;

  @Expose()
  @IsString({ message: 'Tên đăng nhập phải là chuỗi' })
  @MinLength(3, { message: 'Tên đăng nhập phải có ít nhất 3 ký tự' })
  @MaxLength(100, { message: 'Tên đăng nhập không được quá 100 ký tự' })
  @Matches(/^[a-zA-Z0-9_]{3,100}$/, {
    message: 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới',
  })
  @Transform(({ value }) => value?.trim())
  username!: string;

  @Expose()
  @IsUUID('4', { message: 'Vai trò không hợp lệ' })
  roleId!: string;
}
