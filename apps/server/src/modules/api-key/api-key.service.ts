import { PrismaService } from '@/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiKeyService {
  constructor(private prisma: PrismaService) {}

  async findActiveApiKey(key: string) {
    const objKey = await this.prisma.apiKey.findUnique({
      where: { key, status: true },
    });

    return objKey;
  }
}
