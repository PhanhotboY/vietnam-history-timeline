import { IsArray, IsString, IsUUID } from 'class-validator';

export class CreateKeyTokenDto {
  @IsString({ message: 'Id người dùng không hợp lệ' })
  @IsUUID('4', { message: 'Id người dùng không hợp lệ' })
  userId!: string;

  @IsString({ message: '' })
  browserId!: string;

  @IsString({ message: '' })
  publicKey!: string;

  @IsString({ message: '' })
  privateKey!: string;

  @IsArray({ message: '' })
  @IsString({ each: true, message: '' })
  refreshTokensUsed!: string[];

  @IsString({ message: '' })
  refreshToken!: string;
}
