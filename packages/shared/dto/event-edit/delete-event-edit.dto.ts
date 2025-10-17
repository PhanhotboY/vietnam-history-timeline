import { ArrayMinSize, IsArray, IsUUID } from 'class-validator';

// DTO for bulk deleting event edits
export class BulkDeleteEventEditDto {
  @IsArray({ message: 'Danh sách ID phải là mảng' })
  @ArrayMinSize(1, { message: 'Cần ít nhất một ID sự kiện' })
  @IsUUID('4', { each: true, message: 'ID sự kiện không hợp lệ' })
  eventIds!: string[];
}
