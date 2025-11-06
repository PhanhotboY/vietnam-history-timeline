import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../modules/user';
import { OtpModule } from '@auth/modules/otp';
import { MailModule } from '@auth/mail';
import { RoleModule } from '@auth/modules/role';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies';
import { KeyTokenModule } from '@auth/modules/key-token';
import { AuthUtilService } from '@phanhotboy/nsv-jwt-auth';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, RmqModule, RMQ } from '@phanhotboy/nsv-common';
import { Config } from '@auth/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: ConfigService<Config>) => ({
        privateKey: config.get('jwt.privateKey'),
        signOptions: {
          algorithm: 'RS256',
          expiresIn: config.get('jwt.signOptions.expiresIn'),
        },
        global: true,
      }),
      inject: [ConfigService],
    }),
    MailModule,
    UserModule,
    RoleModule,
    OtpModule,
    PassportModule,
    KeyTokenModule,
    RmqModule.register({ name: RMQ.TOPIC_EVENTS_EXCHANGE }),
  ],
  providers: [AuthService, LocalStrategy, AuthUtilService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
