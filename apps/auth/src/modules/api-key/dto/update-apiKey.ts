import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import { CreateApiKeyDto } from './create-apiKey';

export class UpdateApiKeyDto implements Partial<CreateApiKeyDto> {
  @IsOptional()
  @IsString({ message: 'Key must be a string' })
  key?: string;

  @IsOptional()
  @IsBoolean({ message: 'Status must be a boolean' })
  status?: boolean;

  @IsOptional()
  @IsArray({ message: 'Permissions must be an array' })
  permissions?: string[];
}
