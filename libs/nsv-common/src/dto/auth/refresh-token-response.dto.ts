import { PickType } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';

import { UserAuthWithRoleDto } from '../user';
import { RoleBriefResponseDto } from '../role';

@Exclude()
class UserPayloadDto extends PickType(UserAuthWithRoleDto, ['id', 'email']) {
  @Expose()
  @Type(() => RoleBriefResponseDto)
  role!: RoleBriefResponseDto;
}

@Exclude()
class TokenPairDto {
  @Expose()
  @IsString({ message: 'Token không hợp lệ' })
  accessToken!: string;

  @Expose()
  @IsString({ message: 'Token không hợp lệ' })
  refreshToken!: string;
}

@Exclude()
export class RefreshTokenResponseDto {
  @Expose()
  user!: UserPayloadDto;

  @Expose()
  @Type(() => TokenPairDto)
  tokens!: TokenPairDto;
}
