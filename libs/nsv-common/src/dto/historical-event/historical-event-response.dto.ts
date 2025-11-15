import { Exclude, Expose, Type } from 'class-transformer';
import { EventCategoryBriefResponseDto } from '../event-category/event-category-response.dto';
import { PickType } from '@nestjs/swagger';
import { HistoricalEventBaseDto } from './historical-event-base.dto';
import { ImageBriefResponseDto } from '../image';
import { UserBaseResponseDto } from '../user/user-base-response.dto';

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
  @Type(() => EventCategoryBriefResponseDto)
  categories!: any;
}

@Exclude()
export class HistoricalEventDetailResponseDto extends HistoricalEventPreviewResponseDto {
  @Expose() content!: string;
}
