import { Exclude, Expose, Transform } from 'class-transformer';
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

// DTO for creating historical event
@Exclude()
export class HistoricalEventBaseDto {
  @Expose()
  @IsUUID('4', { message: 'Id không hợp lệ' })
  id!: string;

  @Expose()
  @IsString({ message: 'Tên không hợp lệ' })
  @MinLength(1, { message: 'Tên là bắt buộc' })
  @Transform(({ value }) => value?.trim())
  name!: string;

  @Expose()
  @IsOptional()
  @IsUUID('4', { message: 'Thumbnail không hợp lệ' })
  @Transform(({ value }) => value?.trim())
  thumbnailId?: string;

  @Expose()
  @IsOptional()
  @IsInt({ message: 'Ngày bắt đầu không hợp lệ' })
  @Min(1, { message: 'Ngày bắt đầu không hợp lệ' })
  @Max(31, { message: 'Ngày bắt đầu không hợp lệ' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  fromDay?: number | null;

  @Expose()
  @IsOptional()
  @IsInt({ message: 'Tháng bắt đầu không hợp lệ' })
  @Min(1, { message: 'Tháng bắt đầu không hợp lệ' })
  @Max(12, { message: 'Tháng bắt đầu không hợp lệ' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  fromMonth?: number | null;

  @Expose()
  @IsInt({ message: 'Năm bắt đầu không hợp lệ' })
  @Transform(({ value }) => parseInt(value, 10))
  fromYear!: number;

  @Expose()
  @IsOptional()
  @IsInt({ message: 'Ngày kết thúc không hợp lệ' })
  @Min(1, { message: 'Ngày kết thúc không hợp lệ' })
  @Max(31, { message: 'Ngày kết thúc không hợp lệ' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  toDay?: number | null;

  @Expose()
  @IsOptional()
  @IsInt({ message: 'Tháng kết thúc không hợp lệ' })
  @Min(1, { message: 'Tháng kết thúc không hợp lệ' })
  @Max(12, { message: 'Tháng kết thúc không hợp lệ' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  toMonth?: number | null;

  @Expose()
  @IsOptional()
  @IsInt({ message: 'Năm kết thúc không hợp lệ' })
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  toYear?: number | null;

  @Expose()
  @IsString({ message: 'Nội dung không hợp lệ' })
  @MinLength(1, { message: 'Nội dung là bắt buộc' })
  @Transform(({ value }) => value?.trim())
  content!: string;

  @Expose()
  @IsUUID('4', { message: 'ID tác giả không hợp lệ' })
  authorId: string;

  @Expose()
  @IsArray({ message: 'Danh sách danh mục không hợp lệ' })
  @IsUUID('4', { each: true, message: 'ID danh mục không hợp lệ' })
  categoryIds?: string[];

  @Expose()
  createdAt!: string | Date;

  @Expose()
  updatedAt!: string | Date;
}
