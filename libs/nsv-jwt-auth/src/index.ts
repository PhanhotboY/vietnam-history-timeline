import { JwtPayloadDto } from '@phanhotboy/nsv-common/dto';

export * from './decorators';
export * from './dto';
export * from './guards';
export * from './strategies';
export * from './util';
export * from './auth.module';

declare global {
  namespace Express {
    export interface User extends JwtPayloadDto {}
  }
}
