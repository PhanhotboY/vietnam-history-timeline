import { IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateResourceDto {
  @IsString({ message: 'Tên phải là chuỗi' })
  @IsDefined({ message: 'Tên là bắt buộc' })
  name!: string;

  @IsString({ message: 'Slug phải là chuỗi' })
  @IsDefined({ message: 'Slug là bắt buộc' })
  slug!: string;

  @IsOptional()
  @IsString({ message: 'Mô tả phải là chuỗi' })
  description?: string;
}
