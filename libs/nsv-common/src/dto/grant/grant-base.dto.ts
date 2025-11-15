import { Exclude, Expose } from "class-transformer";
import { IsOptional, IsString, IsUUID } from "class-validator";

@Exclude()
export class GrantBaseDto {
  @Expose()
  @IsUUID('4', { message: 'Id không hợp lệ' })
  id!: string

  @Expose()
  @IsUUID('4', { message: 'Role không hợp lệ' })
  roleId!: string;

  @Expose()
  @IsUUID('4', { message: 'Resource không hợp lệ' })
  resourceId!: string;

  @Expose()
  @IsString({ message: 'Action phải là một chuỗi' })
  action!: string;

  @Expose()
  @IsOptional()
  @IsString({ message: 'Attribute phải là một chuỗi' })
  attribute?: string;
}
