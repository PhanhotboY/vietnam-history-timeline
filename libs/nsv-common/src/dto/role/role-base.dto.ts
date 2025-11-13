import { Exclude, Expose } from 'class-transformer';
import { IsString, IsUUID } from 'class-validator';

@Exclude()
export class RoleBaseDto {
  @Expose()
  @IsUUID('4', { message: 'Id không hợp lệ' })
  id!: string;

  @Expose()
  @IsString({ message: 'Tên không hợp lệ' })
  name!: string;

  @Expose()
  @IsString({ message: 'Slug không hợp lệ' })
  slug!: string;

  @Expose()
  @IsString({ message: 'Trạng thái không hợp lệ' })
  status!: string;

  @Expose()
  @IsString({ message: 'Mô tả không hợp lệ' })
  description!: string;
}
