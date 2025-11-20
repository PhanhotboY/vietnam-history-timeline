import { OmitType } from '@nestjs/swagger';
import { GrantBaseDto } from './grant-base.dto';

export class GrantBaseCreateDto extends OmitType(GrantBaseDto, ['id']) {}
