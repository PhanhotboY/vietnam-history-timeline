import { PrismaService } from '@user/database';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { isUUID } from 'class-validator';

import { User } from '@user-prisma';
import {
  RedisService,
  type RedisServiceType,
  UserDeleteDto,
  RMQ,
  USER_EVENT,
  UtilService,
  UserFullCreateDto,
  UserBaseDto,
} from '@phanhotboy/nsv-common';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  private readonly cachePrefix = 'user';

  constructor(
    private readonly prisma: PrismaService,
    private readonly util: UtilService,
    @Inject(RMQ.TOPIC_EVENTS_EXCHANGE) private readonly rmq: ClientProxy,
    @Inject(RedisService) private readonly redisService: RedisServiceType,
  ) {}

  async createUser(user: UserFullCreateDto) {
    return await this.prisma.user.create({
      data: { ...user, slug: user.slug || user.email.split('@')[0] },
    });
  }

  async handleUserRegister(data: UserBaseDto) {
    return await this.createUser({
      ...data,
      avatarId: '',
      firstName: data.email.split('@')[0],
    });
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findUserById(id: string) {
    let user: User | null = null;
    const userKey = this.util.genCacheKey(this.cachePrefix, id);

    user = await this.redisService.get(userKey);
    if (user) {
      return user;
    }

    if (isUUID(id)) {
      user = await this.prisma.user.findUnique({
        where: { id },
      });
    } else {
      user = await this.prisma.user.findFirst({
        where: { email: id },
      });
    }

    await this.redisService.set(userKey, user || null);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async deleteUser(id: string) {
    await this.findUserById(id); // Ensure user exists

    const userKey = this.util.genCacheKey(this.cachePrefix, id);
    await this.redisService.del(userKey);

    await this.prisma.user.delete({ where: { id } });
    this.rmq.emit(
      USER_EVENT.DELETED,
      plainToInstance(UserDeleteDto, { userId: id }),
    );
    return { success: true };
  }
}
