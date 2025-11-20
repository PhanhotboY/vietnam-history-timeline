import { PrismaService } from '@auth/database';
import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';

@Injectable()
export class OtpService {
  constructor(private readonly prismaService: PrismaService) {}

  async newOTP(email: string) {
    await this.prismaService.oTP.deleteMany({ where: { email } });

    const token = randomBytes(16).toString('hex');

    // expires in 5 minutes
    return await this.prismaService.oTP.create({
      data: { token, email, expiresAt: new Date(Date.now() + 5 * 60 * 1000) },
    });
  }

  async getOTPByEmail(email: string) {
    return await this.prismaService.oTP.findFirst({
      where: { email, expiresAt: { gte: new Date() } },
    });
  }

  async deleteOTPByEmail(email: string) {
    return await this.prismaService.oTP.deleteMany({ where: { email } });
  }

  async getOTPByToken(token: string) {
    return await this.prismaService.oTP.findFirst({
      where: { token, expiresAt: { gte: new Date() } },
    });
  }
}
