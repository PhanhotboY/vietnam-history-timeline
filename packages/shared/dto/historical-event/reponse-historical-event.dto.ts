import { UserBriefDto } from '../user/response-user.dto';
import { EventCategoryBriefDto } from '../event-category/response-event-category.dto';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ImageBriefDto } from '../image';

// DTO for response historical event
@Exclude()
export class HistoricalEventBriefDto {
  @Expose() id!: string;

  @Expose() fromDay?: number | null;
  @Expose() fromMonth?: number | null;
  @Expose() fromYear!: number;
  @Expose() toDay?: number | null;
  @Expose() toMonth?: number | null;
  @Expose() toYear?: number | null;
  @Expose() @Type(() => ImageBriefDto) thumbnail?: ImageBriefDto | null;
}

@Exclude()
export class HistoricalEventPreviewDto extends HistoricalEventBriefDto {
  @Type(() => UserBriefDto) @Expose() author!: UserBriefDto;

  @Type(() => EventCategoryBriefDto)
  @Expose()
  categories!: EventCategoryBriefDto[];
}

@Exclude()
export class HistoricalEventDetailDto extends HistoricalEventPreviewDto {
  @Expose() content!: string;
}
