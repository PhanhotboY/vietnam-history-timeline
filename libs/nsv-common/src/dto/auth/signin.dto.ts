import { Exclude, Expose, Transform } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class SignInDto {
  @Expose()
  @IsString({ message: 'Tên đăng nhập không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  username!: string;

  @Expose()
  @IsString({ message: 'Mật khẩu không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  password!: string;

  @Expose()
  @IsString({ message: 'Đăng nhập không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  browserId!: string;
}
