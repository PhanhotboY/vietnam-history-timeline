import { ArrayMinSize, IsArray, IsUUID } from 'class-validator';

// DTO for bulk deleting event periods
export class BulkDeleteEventPeriodDto {
  @IsArray({ message: 'Danh sách ID phải là mảng' })
  @ArrayMinSize(1, { message: 'Cần ít nhất một ID thời kỳ sự kiện' })
  @IsUUID('4', { each: true, message: 'ID thời kỳ sự kiện không hợp lệ' })
  eventPeriodIds!: string[];
}
