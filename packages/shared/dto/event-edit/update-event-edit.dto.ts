import { Transform } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsInt,
  IsUUID,
  Min,
  Max,
  MinLength,
} from 'class-validator';
import { CreateEventEditDto } from './create-event-edit.dto';

export class UpdateEventEditDto implements Partial<CreateEventEditDto> {
  @IsOptional()
  @IsUUID('4', { message: 'ID sự kiện không hợp lệ' })
  eventId?: string;

  @IsOptional()
  @IsUUID('4', { message: 'ID người chỉnh sửa không hợp lệ' })
  editorId?: string;

  @IsOptional()
  @IsString({ message: 'Nội dung trước đó phải là chuỗi' })
  @MinLength(1, { message: 'Nội dung trước đó là bắt buộc' })
  @Transform(({ value }) => value?.trim())
  prevContent?: string;

  @IsOptional()
  @IsString({ message: 'Nội dung mới phải là chuỗi' })
  @MinLength(1, { message: 'Nội dung mới là bắt buộc' })
  @Transform(({ value }) => value?.trim())
  newContent?: string;

  // Previous date fields
  @IsOptional()
  @IsInt({ message: 'Ngày bắt đầu trước đó phải là số nguyên' })
  @Min(1, { message: 'Ngày phải từ 1 đến 31' })
  @Max(31, { message: 'Ngày phải từ 1 đến 31' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  prevFromDay?: number;

  @IsOptional()
  @IsInt({ message: 'Tháng bắt đầu trước đó phải là số nguyên' })
  @Min(1, { message: 'Tháng phải từ 1 đến 12' })
  @Max(12, { message: 'Tháng phải từ 1 đến 12' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  prevFromMonth?: number;

  @IsOptional()
  @IsInt({ message: 'Năm bắt đầu trước đó phải là số nguyên' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  prevFromYear?: number;

  @IsOptional()
  @IsInt({ message: 'Ngày kết thúc trước đó phải là số nguyên' })
  @Min(1, { message: 'Ngày phải từ 1 đến 31' })
  @Max(31, { message: 'Ngày phải từ 1 đến 31' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  prevToDay?: number;

  @IsOptional()
  @IsInt({ message: 'Tháng kết thúc trước đó phải là số nguyên' })
  @Min(1, { message: 'Tháng phải từ 1 đến 12' })
  @Max(12, { message: 'Tháng phải từ 1 đến 12' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  prevToMonth?: number;

  @IsOptional()
  @IsInt({ message: 'Năm kết thúc trước đó phải là số nguyên' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  prevToYear?: number;

  // New date fields
  @IsOptional()
  @IsInt({ message: 'Ngày bắt đầu mới phải là số nguyên' })
  @Min(1, { message: 'Ngày phải từ 1 đến 31' })
  @Max(31, { message: 'Ngày phải từ 1 đến 31' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  newFromDay?: number;

  @IsOptional()
  @IsInt({ message: 'Tháng bắt đầu mới phải là số nguyên' })
  @Min(1, { message: 'Tháng phải từ 1 đến 12' })
  @Max(12, { message: 'Tháng phải từ 1 đến 12' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  newFromMonth?: number;

  @IsOptional()
  @IsInt({ message: 'Năm bắt đầu mới phải là số nguyên' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  newFromYear?: number;

  @IsOptional()
  @IsInt({ message: 'Ngày kết thúc mới phải là số nguyên' })
  @Min(1, { message: 'Ngày phải từ 1 đến 31' })
  @Max(31, { message: 'Ngày phải từ 1 đến 31' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  newToDay?: number;

  @IsOptional()
  @IsInt({ message: 'Tháng kết thúc mới phải là số nguyên' })
  @Min(1, { message: 'Tháng phải từ 1 đến 12' })
  @Max(12, { message: 'Tháng phải từ 1 đến 12' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  newToMonth?: number;

  @IsOptional()
  @IsInt({ message: 'Năm kết thúc mới phải là số nguyên' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  newToYear?: number;
}
