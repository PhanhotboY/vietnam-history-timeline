import { Module, Scope } from '@nestjs/common';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { CommonModule, ConfigService, RmqModule } from '@phanhotboy/nsv-common';
import {
  JwtAuthGuard,
  JwtAuthModule,
  RbacGuard,
} from '@phanhotboy/nsv-jwt-auth';

import { UserModule } from './modules/user';
import { PrismaModule } from './database/prisma.module';
import { Config } from './config';
import { configuration } from './config/configuration';
import { RMQ } from './constants/rmq.constant';

@Module({
  imports: [
    CommonModule.forRoot({
      global: true,
      configuration,
      redisConfigKey: 'redis',
      throttlerConfigKey: 'throttlers',
      rabbitmqConfigKey: 'rabbitmq',
    }),
    PrismaModule.forRoot(),
    JwtAuthModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Config>) => {
        console.log(configuration());
        const jwtPublicKey = configService.get('jwt.publicKey');
        if (!jwtPublicKey) {
          throw new Error('JWT public key is not defined');
        }
        return {
          publicKey: jwtPublicKey,
          global: true,
        };
      },
    }),
    RmqModule.register({ name: RMQ.CLIENT_NAME }),
    UserModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      scope: Scope.REQUEST,
      useValue: new JwtAuthGuard(new Reflector()),
    },
    {
      provide: APP_GUARD,
      scope: Scope.REQUEST,
      useValue: new RbacGuard(new Reflector()),
    },
  ],
})
export class AppModule {}
