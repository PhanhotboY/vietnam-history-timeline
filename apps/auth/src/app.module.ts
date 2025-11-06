import { Module } from '@nestjs/common';
import { JwtAuthGuard, JwtAuthModule } from '@phanhotboy/nsv-jwt-auth';
import {
  CommonModule,
  ConfigService,
  RmqModule,
  RMQ,
} from '@phanhotboy/nsv-common';

import { configuration } from './config/configuration';
import { Config } from './config';
import { PrismaModule } from './database';
import { LocalStrategy } from './auth/strategies';
import { AuthModule } from './auth';
import { MailModule } from './mail';
import { KeyTokenModule } from './modules/key-token';
import { OtpModule } from './modules/otp';
import { ResourceModule } from './modules/resource/resource.module';
import { UserModule } from './modules/user';
import { RoleModule } from './modules/role';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    CommonModule.forRoot({
      configuration,
      rabbitmqConfigKey: 'rabbitmq',
      redisConfigKey: 'redis',
      throttlerConfigKey: 'throttlers',
      cachePrefix: 'auth-service',
      global: true,
    }),
    JwtAuthModule.registerAsync({
      useFactory: (config: ConfigService<Config>) => ({
        publicKey: config.get('jwt.publicKey'),
        global: true,
      }),
      inject: [ConfigService],
      global: true,
    }),
    PrismaModule.forRoot(),
    AuthModule,
    KeyTokenModule,
    MailModule,
    OtpModule,
    RoleModule,
    ResourceModule,
    UserModule,
  ],
  providers: [
    LocalStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
