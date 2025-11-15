import { OmitType } from '@nestjs/swagger';
import { RoleBaseDto } from './role-base.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { GrantBaseCreateDto } from '../grant';
import { ROLE } from '../../constants/role.constant';

@Exclude()
export class RoleBaseCreateDto extends OmitType(RoleBaseDto, ['id', 'status']) {
  @Expose()
  @IsOptional()
  @IsEnum(ROLE.STATUS, { message: 'Trạng thái không hợp lệ' })
  status!: RoleBaseDto['status'];

  @Expose()
  @IsOptional()
  @Type(() => GrantBaseCreateDto)
  grants?: GrantBaseCreateDto[];
}
