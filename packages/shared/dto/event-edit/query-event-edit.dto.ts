import { Transform, Type } from 'class-transformer';
import {
  IsDateString,
  IsIn,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

// DTO for event edit query parameters
export class QueryEventEditDto {
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

  // Filter by event ID
  @IsOptional()
  @IsUUID('4', { message: 'ID sự kiện không hợp lệ' })
  eventId?: string;

  // Filter by editor ID
  @IsOptional()
  @IsUUID('4', { message: 'ID người chỉnh sửa không hợp lệ' })
  editorId?: string;

  // Filter by edit date range
  @IsOptional()
  @IsDateString({}, { message: 'Ngày chỉnh sửa từ không hợp lệ' })
  @Transform(({ value }: any) => (value ? new Date(value) : undefined))
  editedAtFrom?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'Ngày chỉnh sửa đến không hợp lệ' })
  @Transform(({ value }: any) => (value ? new Date(value) : undefined))
  editedAtTo?: Date;
}
