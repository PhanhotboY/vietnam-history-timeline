import { IsArray, IsBoolean, IsString } from 'class-validator';

export class CreateApiKeyDto {
  @IsString({ message: 'Key must be a string' })
  key!: string;

  @IsBoolean({ message: 'Status must be a boolean' })
  status!: boolean;

  @IsArray({ message: 'Permissions must be an array' })
  permissions!: string[];
}
