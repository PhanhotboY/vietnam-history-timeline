import {
  Global,
  MiddlewareConsumer,
  Module,
  NestModule,
  UseInterceptors,
} from '@nestjs/common';

import { LoggerContextMiddleware } from './middleware';
import { ApiKeyGuard } from './guards';
import * as providers from './providers';
import { ApiKeyModule } from '@/modules/api-key';
import { JwtService } from '@nestjs/jwt';
import { KeyTokenService } from '@/modules/key-token/key-token.service';

const services = Object.values(providers);

@Global()
@Module({
  imports: [ApiKeyModule],
  providers: [
    JwtService,
    KeyTokenService,
    ...services,
    // {
    //   provide: APP_GUARD,
    //   useClass: ApiKeyGuard,
    // },
  ],
  exports: [...services, JwtService, KeyTokenService],
})
export class CommonModule implements NestModule {
  // Global Middleware
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerContextMiddleware).forRoutes('{*splat}');
  }
}
