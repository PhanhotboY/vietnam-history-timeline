import { Module } from '@nestjs/common';
import { JwtAuthGuard, JwtAuthModule } from '@phanhotboy/nsv-jwt-auth';
import { CommonModule, ConfigService, RmqModule } from '@phanhotboy/nsv-common';

import { configuration } from './config/configuration';
import { Config } from './config';
import { PrismaModule } from './database';
import { RMQ } from './constants';
import { LocalStrategy } from './auth/strategies';
import { AuthModule } from './auth';
import { MailModule } from './mail';
import { KeyTokenModule } from './modules/key-token';
import { OtpModule } from './modules/otp';
import { ResourceModule } from './modules/resource/resource.module';
import { UserModule } from './modules/user';
import { RoleModule } from './modules/role';

@Module({
  imports: [
    CommonModule.forRoot({
      configuration,
      rabbitmqConfigKey: 'rabbitmq',
      redisConfigKey: 'redis',
      throttlerConfigKey: 'throttlers',
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
    RmqModule.register({ name: RMQ.CLIENT_NAME }),
    PrismaModule.forRoot(),
    AuthModule,
    KeyTokenModule,
    MailModule,
    OtpModule,
    RoleModule,
    ResourceModule,
    UserModule,
  ],
  providers: [JwtAuthGuard, LocalStrategy],
})
export class AppModule {}
