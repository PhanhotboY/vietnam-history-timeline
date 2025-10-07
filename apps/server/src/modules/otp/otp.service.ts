import { PrismaService } from '@/database';
import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';

@Injectable()
export class OtpService {
  constructor(private readonly prismaService: PrismaService) {}

  async newOTP(email: string) {
    await this.prismaService.oTP.deleteMany({ where: { email } });

    const token = randomBytes(16).toString('hex');

    return await this.prismaService.oTP.create({ data: { token, email } });
  }

  async getOTPByEmail(email: string) {
    return await this.prismaService.oTP.findFirst({ where: { email } });
  }

  async deleteOTPByEmail(email: string) {
    return await this.prismaService.oTP.deleteMany({ where: { email } });
  }

  async getOTPByToken(token: string) {
    return await this.prismaService.oTP.findFirst({ where: { token } });
  }
}
