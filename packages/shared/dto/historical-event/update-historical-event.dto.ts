import { Transform } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsInt,
  IsUUID,
  IsArray,
  Min,
  Max,
  MinLength,
} from 'class-validator';
import { CreateHistoricalEventDto } from './create-historical-event.dto';

// DTO for updating historical event
export class UpdateHistoricalEventDto
  implements Partial<CreateHistoricalEventDto>
{
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

  @IsOptional()
  @IsInt({ message: 'Năm bắt đầu phải là số nguyên' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  fromYear?: number;

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

  @IsOptional()
  @IsInt({ message: 'Năm kết thúc phải là số nguyên' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  toYear?: number;

  @IsOptional()
  @IsString({ message: 'Nội dung phải là chuỗi' })
  @MinLength(1, { message: 'Nội dung là bắt buộc' })
  @Transform(({ value }) => value?.trim())
  content?: string;

  @IsOptional()
  @IsUUID('4', { message: 'ID tác giả không hợp lệ' })
  authorId?: string;

  @IsOptional()
  @IsArray({ message: 'Danh sách danh mục phải là mảng' })
  @IsUUID('4', { each: true, message: 'ID danh mục không hợp lệ' })
  categoryIds?: string[];
}
