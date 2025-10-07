import { SetMetadata } from '@nestjs/common';

export const SetAuthMetadata = (...metadata: string[]) =>
  SetMetadata('AuthMetadata', metadata);
