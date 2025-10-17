import { Exclude, Expose, Type } from 'class-transformer';
import { HistoricalEventBriefDto } from '../historical-event';
import { UserBriefDto } from '../user/response-user.dto';

// DTO for creating event edit
@Exclude()
export class EventEditBriefDto {
  @Expose()
  id!: string;

  @Type(() => HistoricalEventBriefDto)
  @Expose()
  event!: HistoricalEventBriefDto;
  @Type(() => UserBriefDto) @Expose() editor!: UserBriefDto;
}

@Exclude()
export class EventEditDto extends EventEditBriefDto {
  @Expose()
  prevContent!: string;

  @Expose()
  newContent!: string;

  // Previous date fields
  @Expose()
  prevFromDay?: number;

  @Expose()
  prevFromMonth?: number;

  @Expose()
  prevFromYear!: number;

  @Expose()
  prevToDay?: number;

  @Expose()
  prevToMonth?: number;

  @Expose()
  prevToYear?: number;

  // New date fields
  @Expose()
  newFromDay?: number;

  @Expose()
  newFromMonth?: number;

  @Expose()
  newFromYear?: number;

  @Expose()
  newToDay?: number;

  @Expose()
  newToMonth?: number;

  @Expose()
  newToYear?: number;
  @Expose()
  slug!: string;
}
