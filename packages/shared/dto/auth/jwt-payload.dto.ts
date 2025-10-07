import { IsEmail, IsString, IsUUID } from 'class-validator';

export class JwtPayloadDto {
  @IsString({ message: 'Id người dùng không hợp lệ' })
  @IsUUID('4')
  userId!: string;

  @IsString({ message: 'Email không hợp lệ' })
  @IsEmail()
  email!: string;

  @IsString({ message: 'Id trình duyệt không hợp lệ' })
  browserId!: string;
}
