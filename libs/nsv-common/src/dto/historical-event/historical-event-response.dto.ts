import { Exclude, Expose, Type } from 'class-transformer';
import { PickType } from '@nestjs/swagger';
import { HistoricalEventBaseDto } from './historical-event-base.dto';
import { ImageBriefResponseDto } from '../image';
import { UserBaseResponseDto } from '../user/user-base-response.dto';
import {
  EventCategoriesBaseDto,
  EventCategoriesBriefResponseDto,
} from '../event-categories';

// DTO for response historical event
@Exclude()
export class HistoricalEventBriefResponseDto extends PickType(
  HistoricalEventBaseDto,
  [
    'id',
    'name',
    'fromDay',
    'fromMonth',
    'fromYear',
    'toDay',
    'toMonth',
    'toYear',
  ],
) {
  @Type(() => ImageBriefResponseDto)
  thumbnail?: ImageBriefResponseDto | null;
}

@Exclude()
export class HistoricalEventPreviewResponseDto extends HistoricalEventBriefResponseDto {
  @Expose()
  @Type(() => UserBaseResponseDto)
  author!: UserBaseResponseDto;

  @Expose()
  @Type(() => EventCategoriesBaseDto)
  categories!: EventCategoriesBaseDto[];
}

@Exclude()
export class HistoricalEventDetailResponseDto extends HistoricalEventPreviewResponseDto {
  @Expose() content!: string;
}
