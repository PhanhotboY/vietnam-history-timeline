import { Type } from 'class-transformer';
import {
  IsIn,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

// DTO for event category query parameters
export class QueryEventCategoryDto {
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
  @IsString({ message: 'Tên phải là chuỗi' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'Slug phải là chuỗi' })
  slug?: string;
}
