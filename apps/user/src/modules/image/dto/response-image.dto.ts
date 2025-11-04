import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ImageBriefDto {
  @Expose() id!: string;
  @Expose() caption?: string | null;
  @Expose() url!: string;
  @Expose() link?: string | null;
  @Expose() type?: string | null;
}
