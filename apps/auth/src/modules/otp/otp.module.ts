import { Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { MailModule } from '@auth/mail';

@Module({
  imports: [MailModule],
  providers: [OtpService],
  exports: [OtpService],
})
export class OtpModule {}
