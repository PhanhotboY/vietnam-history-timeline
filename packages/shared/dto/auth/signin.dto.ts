import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class SignInDto {
  @IsString({ message: 'Tên đăng nhập không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  username!: string;

  @IsString({ message: 'Mật khẩu phải là chuỗi' })
  password!: string;

  @IsString({ message: 'Đăng nhập không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  browserId!: string;

  @IsString({ message: 'Refresh Token phải là chuỗi' })
  @IsOptional()
  @Transform(({ value }) => value?.trim() || null)
  refreshToken?: string | null;
}
