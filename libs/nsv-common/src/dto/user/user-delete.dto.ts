import { Exclude, Expose } from 'class-transformer';
import { ArrayMinSize, IsArray, IsUUID } from 'class-validator';

@Exclude()
export class UserDeleteDto {
  @Expose()
  @IsUUID('4', { message: 'ID không hợp lệ' })
  userId!: string;
}

// DTO for bulk deleting users
@Exclude()
export class UserBulkDeleteDto {
  @Expose()
  @IsArray({ message: 'Danh sách ID phải là mảng' })
  @ArrayMinSize(1, { message: 'Cần ít nhất một ID người dùng' })
  @IsUUID('4', { each: true, message: 'ID người dùng không hợp lệ' })
  userIds!: string[];
}
