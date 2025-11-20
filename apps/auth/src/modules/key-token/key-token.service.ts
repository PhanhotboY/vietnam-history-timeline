import { PrismaService } from '@auth/database';
import { Injectable } from '@nestjs/common';
import { CreateKeyTokenDto } from '@auth/modules/key-token/dto';

@Injectable()
export class KeyTokenService {
  constructor(private readonly prisma: PrismaService) {}

  async createKeyToken({
    userId,
    browserId,
    refreshToken,
    refreshTokensUsed,
  }: CreateKeyTokenDto) {
    const data = {
      refreshToken,
    };

    let keyToken = await this.prisma.keyToken.upsert({
      where: {
        unique_user_browser: { userId, browserId },
      },
      create: { ...data, userId, browserId, refreshTokensUsed },
      update: { ...data, refreshTokensUsed: { push: refreshToken } },
    });

    return keyToken;
  }

  async findByUserId(userId: string, browserId: string) {
    return this.prisma.keyToken.findFirst({
      where: { userId, browserId },
    });
  }

  async removeKeyById(id: string) {
    return this.prisma.keyToken.delete({ where: { id } });
  }

  findUsedRefreshToken = async (refreshToken: string) => {
    return this.prisma.keyToken.findFirst({
      where: { refreshTokensUsed: { has: refreshToken } },
    });
  };

  findByRefreshToken = async (refreshToken: string) => {
    return this.prisma.keyToken.findFirst({ where: { refreshToken } });
  };

  updateRefreshToken = async (
    keyTokenId: string,
    refreshToken: string,
    newRefreshToken: string,
  ) => {
    return this.prisma.keyToken.update({
      where: { id: keyTokenId },
      data: {
        refreshToken: newRefreshToken,
        refreshTokensUsed: { push: refreshToken },
      },
    });
  };
}
