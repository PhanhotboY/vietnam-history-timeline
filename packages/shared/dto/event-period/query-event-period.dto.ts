import { Transform, Type } from 'class-transformer';
import {
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

// DTO for event period query parameters
export class QueryEventPeriodDto {
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

  // Filter by name
  @IsOptional()
  @IsString({ message: 'Tên phải là chuỗi' })
  name?: string;

  // Filter by slug
  @IsOptional()
  @IsString({ message: 'Slug phải là chuỗi' })
  slug?: string;

  // Filter by year range (from)
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Năm bắt đầu phải là số nguyên' })
  fromYear?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Tháng bắt đầu phải là số nguyên' })
  @Min(1, { message: 'Tháng phải từ 1 đến 12' })
  @Max(12, { message: 'Tháng phải từ 1 đến 12' })
  fromMonth?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Ngày bắt đầu phải là số nguyên' })
  @Min(1, { message: 'Ngày phải từ 1 đến 31' })
  @Max(31, { message: 'Ngày phải từ 1 đến 31' })
  fromDay?: number;

  // Filter by year range (to)
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Năm kết thúc phải là số nguyên' })
  toYear?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Tháng kết thúc phải là số nguyên' })
  @Min(1, { message: 'Tháng phải từ 1 đến 12' })
  @Max(12, { message: 'Tháng phải từ 1 đến 12' })
  toMonth?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Ngày kết thúc phải là số nguyên' })
  @Min(1, { message: 'Ngày phải từ 1 đến 31' })
  @Max(31, { message: 'Ngày phải từ 1 đến 31' })
  toDay?: number;

  // Filter by year range (searching within a specific period)
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Năm tìm kiếm phải là số nguyên' })
  searchYear?: number;
}
