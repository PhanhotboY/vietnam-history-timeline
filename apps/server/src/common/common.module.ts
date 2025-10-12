import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';

import { LoggerContextMiddleware } from './middleware';
import * as providers from './providers';
import { ApiKeyModule } from '@/modules/api-key';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '@/config';
import KeyvRedis from '@keyv/redis';

const services = Object.values(providers);

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
      useFactory: async (configService: providers.ConfigService) => ({
        stores: [new KeyvRedis(configService.get('redis.url'))],
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
  exports: [...services, ConfigModule, JwtModule],
})
export class CommonModule implements NestModule {
  // Global Middleware
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerContextMiddleware).forRoutes('{*splat}');
  }
}
