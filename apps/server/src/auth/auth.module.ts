import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../modules/user';
import { OtpModule } from '@/modules/otp';
import { MailModule } from '@/mail';
import { RoleModule } from '@/modules/role';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies';
import { KeyTokenModule } from '@/modules/key-token';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    MailModule,
    UserModule,
    RoleModule,
    OtpModule,
    PassportModule,
    KeyTokenModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
