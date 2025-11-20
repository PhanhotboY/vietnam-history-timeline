import { Exclude, Expose, Type } from 'class-transformer';
import { UserAuthDto } from '../user';
import { RoleBaseDto } from '../role/role-base.dto';

@Exclude()
export class UserAuthWithRoleDto extends UserAuthDto {
  @Expose()
  @Type(() => RoleBaseDto)
  role!: RoleBaseDto;
}
