import { IsString, MinLength } from 'class-validator';

// DTO for password change (for current user)
export class PasswordUserDto {
  @IsString({ message: 'Mật khẩu phải là chuỗi' })
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password!: string;
}
