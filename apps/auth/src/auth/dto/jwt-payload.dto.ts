import { IsArray, IsEmail, IsString, IsUUID } from 'class-validator';

export class JwtPayloadDto {
  @IsUUID('4', { message: 'Id người dùng không hợp lệ' })
  userId!: string;

  @IsString({ message: 'Email không hợp lệ' })
  @IsEmail()
  email!: string;

  @IsString({ message: 'Id trình duyệt không hợp lệ' })
  browserId!: string;

  @IsArray({ message: 'Permissions không hợp lệ' })
  permissions!: JwtPermissionDto[];
}

export class JwtPermissionDto {
  @IsString({ message: 'Role không hợp lệ' })
  role!: string;

  @IsString({ message: 'Resource không hợp lệ' })
  resource!: string;

  @IsString({ message: 'Action không hợp lệ' })
  action!: string;

  @IsString({ message: 'Attribute không hợp lệ' })
  attribute!: string;
}
