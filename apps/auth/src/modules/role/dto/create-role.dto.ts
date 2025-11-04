import { RoleStatus } from '@auth-prisma';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class CreateRoleDto {
  @IsDefined({ message: 'Tên là bắt buộc' })
  @IsString({ message: 'Tên phải là chuỗi' })
  name!: string;

  @IsDefined({ message: 'Slug là bắt buộc' })
  @IsString({ message: 'Slug phải là chuỗi' })
  slug!: string;

  @IsDefined({ message: 'Trạng thái là bắt buộc' })
  @IsEnum(Object.values(RoleStatus), {
    message: `Trạng thái phải là một trong các giá trị sau: ${Object.values(
      RoleStatus,
    ).join(', ')}`,
  })
  status!: Values<typeof RoleStatus>;

  @IsOptional()
  @IsString({ message: 'Mô tả phải là chuỗi' })
  description?: string;

  @IsArray({ message: 'Grants phải là một mảng' })
  @ValidateNested({
    each: true,
    message: 'Mỗi grant phải là một object hợp lệ',
  })
  @Type(() => GrantDto)
  grants!: GrantDto[];
}

export class GrantDto {
  @IsUUID('4', { message: 'ID resource không hợp lệ' })
  resourceId!: string;

  @IsString({ message: 'Action phải là một chuỗi' })
  action!: string;

  @IsOptional()
  @IsString({ message: 'Attribute phải là một chuỗi' })
  attribute?: string;
}
