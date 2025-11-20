import { IsBoolean, IsString } from 'class-validator';

export class JwtOptionsDto {
  @IsString({ message: 'JWT Public Key must be a string' })
  publicKey!: string;
}

export class ModuleOptionDto extends JwtOptionsDto {
  @IsBoolean({ message: 'Global option must be a boolean' })
  global?: boolean;
}
