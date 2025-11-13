import { Transform } from 'class-transformer';
import { IsEmail } from 'class-validator';

export class SignUpDto {
  @IsEmail({}, { message: 'Email không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  email!: string;
}
