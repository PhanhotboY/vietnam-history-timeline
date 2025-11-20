import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray, IsEmail, IsString, IsUUID } from 'class-validator';

@Exclude()
export class JwtPayloadDto {
  @Expose()
  @ApiProperty({ description: 'Id người dùng' })
  @IsUUID('4', { message: 'Id người dùng không hợp lệ' })
  userId!: string;

  @Expose()
  @ApiProperty({ description: 'Email người dùng' })
  @IsString({ message: 'Email không hợp lệ' })
  @IsEmail()
  email!: string;

  @Expose()
  @ApiProperty({ description: 'Fingerprint trình duyệt' })
  @IsString({ message: 'Id trình duyệt không hợp lệ' })
  browserId!: string;

  @Expose()
  @ApiProperty({ description: 'Permissions của người dùng' })
  @IsArray({ message: 'Permissions không hợp lệ' })
  @Type(() => JwtPermissionDto)
  permissions!: JwtPermissionDto[];
}

@Exclude()
export class JwtPermissionDto {
  /** Role name */
  @Expose()
  @IsString({ message: 'Role không hợp lệ' })
  role!: string;

  @Expose()
  @IsString({ message: 'Resource không hợp lệ' })
  resource!: string;

  @Expose()
  @IsString({ message: 'Action không hợp lệ' })
  action!: string;

  @Expose()
  @IsString({ message: 'Attribute không hợp lệ' })
  attribute!: string;
}
