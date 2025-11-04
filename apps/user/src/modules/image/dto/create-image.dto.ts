import { Transform } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsUUID,
  IsUrl,
  MinLength,
  MaxLength,
} from 'class-validator';

// DTO for creating image
export class CreateImageDto {
  @IsString({ message: 'Tên phải là chuỗi' })
  @MinLength(1, { message: 'Tên là bắt buộc' })
  @MaxLength(255, { message: 'Tên không được quá 255 ký tự' })
  @Transform(({ value }) => value?.trim())
  name!: string;

  @IsOptional()
  @IsString({ message: 'Chú thích phải là chuỗi' })
  @Transform(({ value }) => value?.trim())
  caption?: string;

  @IsOptional()
  @IsString({ message: 'Mô tả phải là chuỗi' })
  @Transform(({ value }) => value?.trim())
  description?: string;

  @IsString({ message: 'URL phải là chuỗi' })
  @IsUrl({}, { message: 'URL không hợp lệ' })
  @MaxLength(255, { message: 'URL không được quá 255 ký tự' })
  @Transform(({ value }) => value?.trim())
  url!: string;

  @IsOptional()
  @IsString({ message: 'Link phải là chuỗi' })
  @IsUrl({}, { message: 'Link không hợp lệ' })
  @MaxLength(255, { message: 'Link không được quá 255 ký tự' })
  @Transform(({ value }) => value?.trim())
  link?: string;

  @IsOptional()
  @IsString({ message: 'Loại phải là chuỗi' })
  @MaxLength(100, { message: 'Loại không được quá 100 ký tự' })
  @Transform(({ value }) => value?.trim())
  type?: string;

  @IsUUID('4', { message: 'ID người tải lên không hợp lệ' })
  uploaderId!: string;
}
