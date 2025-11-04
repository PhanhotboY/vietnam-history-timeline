import { Exclude, Expose } from 'class-transformer';

// Base DTO for user creation
@Exclude()
export class UserBriefDto {
  @Expose() id!: string;
  @Expose() email!: string;

  @Expose() username!: string;

  @Expose() slug!: string;
}
