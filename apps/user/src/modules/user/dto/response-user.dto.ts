import { Exclude, Expose } from 'class-transformer';
import { ImageBriefDto } from '@user/modules/image/dto';

// Base DTO for user creation
@Exclude()
export class UserBriefDto {
  @Expose() id!: string;
  @Expose() email!: string;

  @Expose() username!: string;

  @Expose() slug!: string;

  @Expose() firstName!: string;

  @Expose() lastName?: string | null;

  @Expose() avatar?: ImageBriefDto | null;
}
