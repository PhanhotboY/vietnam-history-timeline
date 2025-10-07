import { PrismaService } from '@/database';
import { Injectable } from '@nestjs/common';
import { CreateKeyTokenDto } from '@shared/dto/keyToken/create-keyToken.dto';

@Injectable()
export class KeyTokenService {
  constructor(private readonly prisma: PrismaService) {}

  async createKeyToken({
    userId,
    browserId,
    privateKey,
    publicKey,
    refreshToken,
    refreshTokensUsed,
  }: CreateKeyTokenDto) {
    const data = {
      privateKey: privateKey.toString(),
      publicKey: publicKey.toString(),
      refreshToken,
    };

    let keyToken = await this.prisma.keyToken.upsert({
      where: {
        unique_user_browser: { userId, browserId },
      },
      create: { ...data, userId, browserId, refreshTokensUsed },
      update: { ...data, refreshTokensUsed: { push: refreshToken } },
    });

    return { publicKey: keyToken?.publicKey, privateKey: keyToken?.privateKey };
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
