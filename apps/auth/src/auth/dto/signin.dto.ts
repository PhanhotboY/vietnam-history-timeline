import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class SignInDto {
  @IsString({ message: 'Đăng nhập không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  browserId!: string;
}
