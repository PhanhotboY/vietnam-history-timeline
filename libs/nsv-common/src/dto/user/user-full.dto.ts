import { Exclude, Expose, Transform } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsDateString,
  IsEnum,
  MaxLength,
  Matches,
} from 'class-validator';
import { USER } from '../../constants';
import { UserBaseDto } from './user-base.dto';

// Base DTO for user creation
@Exclude()
export class UserFullDto extends UserBaseDto {
  @Expose()
  @IsOptional()
  @IsString({ message: 'Địa chỉ phải là chuỗi' })
  @MaxLength(512, { message: 'Địa chỉ không được quá 512 ký tự' })
  address?: string;

  @Expose()
  @IsOptional()
  @IsDateString({}, { message: 'Ngày sinh không hợp lệ' })
  @Transform(({ value }) => (value ? new Date(value) : undefined))
  birthdate?: Date;

  @Expose()
  @IsOptional()
  @IsString({ message: 'Số điện thoại phải là chuỗi' })
  @Matches(/^(\+84|0)[3|5|7|8|9][0-9]{8}$/, {
    message: 'Số điện thoại không hợp lệ',
  })
  @Transform(({ value }) => value?.trim())
  msisdn?: string;

  @Expose()
  @IsOptional()
  @IsEnum(Object.values(USER.SEX), {
    message: 'Giới tính không hợp lệ',
  })
  sex?: Values<typeof USER.SEX>;

  @Expose()
  createdAt: Date | string;

  @Expose()
  updatedAt: Date | string;
}
