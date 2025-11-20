import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { OtpService } from '@auth/modules/otp/otp.service';
import { TemplateService } from './template/template.service';

@Module({
  providers: [MailService, OtpService, TemplateService],
  exports: [MailService, OtpService, TemplateService],
})
export class MailModule {}
