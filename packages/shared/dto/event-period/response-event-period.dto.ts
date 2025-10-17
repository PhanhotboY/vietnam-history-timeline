import { Exclude, Expose, Transform } from 'class-transformer';

// DTO for creating event period
@Exclude()
export class EventPeriodBriefDto {
  @Expose() id!: string;
  @Expose() fromDay?: number;
  @Expose() fromMonth?: number;
  @Expose() fromYear!: number;
  @Expose() toDay?: number;
  @Expose() toMonth?: number;
  @Expose() toYear!: number;
  @Expose() name!: string;
  @Expose() slug!: string;
}

@Exclude()
export class EventPeriodDetailDto extends EventPeriodBriefDto {
  @Expose() description?: string;
}
