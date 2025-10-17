import { Exclude, Expose } from 'class-transformer';

// DTO for creating event category
@Exclude()
export class EventCategoryBriefDto {
  @Expose()
  id!: string;

  @Expose()
  name!: string;

  @Expose()
  slug!: string;
}

@Exclude()
export class EventCategoryDto extends EventCategoryBriefDto {
  @Expose()
  description?: string;
}
