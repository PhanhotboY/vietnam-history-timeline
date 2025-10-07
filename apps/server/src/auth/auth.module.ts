import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../modules/user';
import { RoleService } from '../modules/role/role.service';
import { OtpService } from '@/modules/otp';
import { MailModule } from '@/mail';

@Module({
  imports: [MailModule],
  providers: [AuthService, UserService, RoleService, OtpService],
  controllers: [AuthController],
})
export class AuthModule {}
