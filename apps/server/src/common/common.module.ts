import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';

import { LoggerContextMiddleware } from './middleware';
import * as providers from './providers';
import { ApiKeyModule } from '@/modules/api-key';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '@/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_INTERCEPTOR } from '@nestjs/core';

const { REDIS_CLIENT, ...pvds } = providers;
const services = Object.values(pvds);

@Global()
@Module({
  imports: [
    ApiKeyModule,
    JwtModule.registerAsync({
      useFactory: async (configService: providers.ConfigService) => ({
        secret: configService.get('jwtSecret'),
      }),
      inject: [providers.ConfigService],
    }),
    ConfigModule.forRoot({
      load: [configuration],
      cache: true,
    }),
    CacheModule.registerAsync({
      useFactory: async (redisClient) => ({
        store: [redisClient],
      }),
      inject: [REDIS_CLIENT],
    }),
    ThrottlerModule.forRootAsync({
      useFactory: async (configService: providers.ConfigService) => ({
        throttlers: configService.get('throttlers'),
      }),
      inject: [providers.ConfigService],
    }),
  ],
  providers: [
    JwtService,
    ...services,
    // {
    //   provide: APP_GUARD,
    //   useClass: ApiKeyGuard,
    // },
  ],
  exports: [...services, ConfigModule, JwtModule, CacheModule],
})
export class CommonModule implements NestModule {
  // Global Middleware
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerContextMiddleware).forRoutes('{*splat}');
  }
}
