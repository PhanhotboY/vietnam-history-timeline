import nodemailer from 'nodemailer';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OtpService } from '@/modules/otp/otp.service';
import { TemplateService } from './template/template.service';

@Injectable()
export class MailService implements OnModuleInit {
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly configService: ConfigService,
    private readonly templateService: TemplateService,
    private readonly otpService: OtpService,
  ) {}

  onModuleInit() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get('mail.auth.user'),
        pass: this.configService.get('mail.auth.pass'),
      },
    });
  }

  async sendMail({
    to,
    subject,
    html,
  }: {
    to: string;
    subject: string;
    html: string;
  }) {
    try {
      return await this.transporter.sendMail({
        from: this.configService.get('mail.auth.user'),
        to,
        subject,
        html,
      });
    } catch (error) {
      throw new Error(`Error sending email: ${error}`);
    }
  }

  async sendVerificationEmail(toEmail: string) {
    const otp = await this.otpService.newOTP(toEmail);

    const html = this.templateService.getTemplateAndReplacePlaceholders(
      'verify-email',
      {
        verifyUrl: `${this.configService.get('serverUrl')}/api/v1/auth/verify-email?token=${otp.token}`,
      },
    );

    return await this.sendMail({
      to: toEmail,
      subject: 'Xác nhận địa chỉ email',
      html,
    });
  }

  async sendTempPassEmail(
    toEmail: string,
    { password, username }: { password: string; username: string },
  ) {
    const html = this.templateService.getTemplateAndReplacePlaceholders(
      'temp-password',
      {
        clientUrl: this.configService.get('CLIENT_URL')!,
        password,
        username,
      },
    );

    return await this.sendMail({
      to: toEmail,
      subject: 'Mật khẩu tạm thời',
      html,
    });
  }
}
