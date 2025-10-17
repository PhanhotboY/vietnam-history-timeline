import { UserSex, UserStatus } from '@server-prisma/index';
import { Transform, Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsIn,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

// DTO for user query parameters
export class QueryUserDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'Trang phải là số' })
  @IsPositive({ message: 'Trang phải là số dương' })
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'Giới hạn phải là số' })
  @IsPositive({ message: 'Giới hạn phải là số dương' })
  limit?: number;

  @IsOptional()
  @IsString({ message: 'Từ khóa tìm kiếm phải là chuỗi' })
  search?: string;

  @IsOptional()
  @IsString({ message: 'Trường sắp xếp phải là chuỗi' })
  sortBy?: string;

  @IsOptional()
  @IsIn(['asc', 'desc'], { message: 'Thứ tự sắp xếp phải là asc hoặc desc' })
  sortOrder?: 'asc' | 'desc';

  @IsOptional()
  @IsEnum(UserStatus, { message: 'Trạng thái không hợp lệ' })
  status?: string;

  @IsOptional()
  @IsEnum(UserSex, { message: 'Giới tính không hợp lệ' })
  sex?: string;

  @IsOptional()
  roleId?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Ngày sinh từ không hợp lệ' })
  @Transform(({ value }: any) => (value ? new Date(value) : undefined))
  birthdateFrom?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'Ngày sinh đến không hợp lệ' })
  @Transform(({ value }: any) => (value ? new Date(value) : undefined))
  birthdateTo?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'Ngày tạo từ không hợp lệ' })
  @Transform(({ value }: any) => (value ? new Date(value) : undefined))
  createdAtFrom?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'Ngày tạo đến không hợp lệ' })
  @Transform(({ value }: any) => (value ? new Date(value) : undefined))
  createdAtTo?: Date;
}
