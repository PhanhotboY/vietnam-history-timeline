import { ArrayMinSize, IsArray, IsUUID } from 'class-validator';

// DTO for bulk deleting event categories
export class BulkDeleteEventCategoryDto {
  @IsArray({ message: 'Danh sách ID phải là mảng' })
  @ArrayMinSize(1, { message: 'Cần ít nhất một ID danh mục sự kiện' })
  @IsUUID('4', { each: true, message: 'ID danh mục sự kiện không hợp lệ' })
  categoryIds!: string[];
}
