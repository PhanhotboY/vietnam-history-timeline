import { Transform } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsInt,
  Min,
  Max,
  MinLength,
  MaxLength,
} from 'class-validator';

// DTO for creating event period
export class CreateEventPeriodDto {
  @IsOptional()
  @IsInt({ message: 'Ngày bắt đầu phải là số nguyên' })
  @Min(1, { message: 'Ngày phải từ 1 đến 31' })
  @Max(31, { message: 'Ngày phải từ 1 đến 31' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  fromDay?: number;

  @IsOptional()
  @IsInt({ message: 'Tháng bắt đầu phải là số nguyên' })
  @Min(1, { message: 'Tháng phải từ 1 đến 12' })
  @Max(12, { message: 'Tháng phải từ 1 đến 12' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  fromMonth?: number;

  @IsInt({ message: 'Năm bắt đầu phải là số nguyên' })
  @Transform(({ value }) => parseInt(value, 10))
  fromYear!: number;

  @IsOptional()
  @IsInt({ message: 'Ngày kết thúc phải là số nguyên' })
  @Min(1, { message: 'Ngày phải từ 1 đến 31' })
  @Max(31, { message: 'Ngày phải từ 1 đến 31' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  toDay?: number;

  @IsOptional()
  @IsInt({ message: 'Tháng kết thúc phải là số nguyên' })
  @Min(1, { message: 'Tháng phải từ 1 đến 12' })
  @Max(12, { message: 'Tháng phải từ 1 đến 12' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  toMonth?: number;

  @IsInt({ message: 'Năm kết thúc phải là số nguyên' })
  @Transform(({ value }) => parseInt(value, 10))
  toYear!: number;

  @IsString({ message: 'Tên phải là chuỗi' })
  @MinLength(1, { message: 'Tên là bắt buộc' })
  @MaxLength(255, { message: 'Tên không được quá 255 ký tự' })
  @Transform(({ value }) => value?.trim())
  name!: string;

  @IsString({ message: 'Slug phải là chuỗi' })
  @MinLength(1, { message: 'Slug là bắt buộc' })
  @MaxLength(255, { message: 'Slug không được quá 255 ký tự' })
  @Transform(({ value }) => value?.trim())
  slug!: string;

  @IsOptional()
  @IsString({ message: 'Mô tả phải là chuỗi' })
  @Transform(({ value }) => value?.trim())
  description?: string;
}
