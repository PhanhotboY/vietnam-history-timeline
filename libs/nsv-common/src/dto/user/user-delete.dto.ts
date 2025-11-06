import { IsUUID } from 'class-validator';

export class UserDeleteDto {
  @IsUUID('4', { message: 'ID không hợp lệ' })
  userId!: string;
}
