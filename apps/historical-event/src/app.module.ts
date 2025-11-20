import { Module } from '@nestjs/common';
import { CommonModule, ConfigService } from '@phanhotboy/nsv-common';
import { Config, configuration } from './config';
import {
  JwtAuthGuard,
  JwtAuthModule,
  RbacGuard,
} from '@phanhotboy/nsv-jwt-auth';
import { APP_GUARD } from '@nestjs/core';
import { HistoricalEventModule } from './modules/historical-event/historical-event.module';
import { PrismaModule } from './database';
import { UserModule } from './modules/user';

@Module({
  imports: [
    CommonModule.forRoot({
      cachePrefix: 'historical-event-service',
      configuration,
      rabbitmqConfigKey: 'rabbitmq',
      redisConfigKey: 'redis',
      throttlerConfigKey: 'throttlers',
      global: true,
    }),
    JwtAuthModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService<Config>) => ({
        publicKey: configService.get('jwt.publicKey'),
      }),
    }),
    PrismaModule.forRoot(),
    HistoricalEventModule,
    UserModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RbacGuard },
  ],
})
export class AppModule {}
