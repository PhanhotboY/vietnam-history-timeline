import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsUUID } from 'class-validator';

// DTO for bulk deleting users
export class BulkDeleteUserDto {
  @IsArray({ message: 'Danh sách ID phải là mảng' })
  @ArrayMinSize(1, { message: 'Cần ít nhất một ID người dùng' })
  @IsUUID('4', { each: true, message: 'ID người dùng không hợp lệ' })
  userIds!: string[];
}
