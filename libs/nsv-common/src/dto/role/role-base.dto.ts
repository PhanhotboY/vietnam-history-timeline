import { Exclude, Expose } from 'class-transformer';
import { IsString, IsUUID, IsEnum } from 'class-validator';
import { ROLE } from '../../constants/role.constant';

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
  @IsEnum(ROLE.STATUS, { message: 'Trạng thái không hợp lệ' })
  status!: Values<typeof ROLE.STATUS>;

  @Expose()
  @IsString({ message: 'Mô tả không hợp lệ' })
  description!: string;
}
