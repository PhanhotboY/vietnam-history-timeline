import { Transform } from 'class-transformer';
import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';
import { CreateEventCategoryDto } from './create-event-category.dto';

// DTO for updating event category
export class UpdateEventCategoryDto implements Partial<CreateEventCategoryDto> {
  @IsOptional()
  @IsString({ message: 'Tên phải là chuỗi' })
  @MinLength(1, { message: 'Tên là bắt buộc' })
  @MaxLength(255, { message: 'Tên không được quá 255 ký tự' })
  @Transform(({ value }) => value?.trim())
  name?: string;

  @IsOptional()
  @IsString({ message: 'Slug phải là chuỗi' })
  @MinLength(1, { message: 'Slug là bắt buộc' })
  @MaxLength(255, { message: 'Slug không được quá 255 ký tự' })
  @Transform(({ value }) => value?.trim())
  slug?: string;

  @IsOptional()
  @IsString({ message: 'Mô tả phải là chuỗi' })
  @Transform(({ value }) => value?.trim())
  description?: string;
}
