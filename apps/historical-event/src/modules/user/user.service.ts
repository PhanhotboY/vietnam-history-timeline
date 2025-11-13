import { PrismaService } from '@historical-event/database';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { isUUID } from 'class-validator';

import { User } from '@historical-event-prisma';
import {
  RedisService,
  type RedisServiceType,
  UserDeleteDto,
  RMQ,
  USER_EVENT,
  UtilService,
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

  async createUser(user: UserBaseDto) {
    return await this.prisma.user.create({ data: user });
  }

  async handleUserRegister(data: UserBaseDto) {
    console.log(data);
    return await this.createUser({
      ...data,
      slug: data.email.split('@')[0],
      firstName: data.email.split('@')[0],
    });
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
      throw new NotFoundException('User not found');
    }

    await this.redisService.set(userKey, user || null);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async deleteUser(id: string) {
    await this.findUserById(id); // Ensure user exists

    await this.prisma.user.delete({ where: { id } });
    this.rmq.emit(
      USER_EVENT.DELETED,
      plainToInstance(UserDeleteDto, { userId: id }),
    );

    const userKey = this.util.genCacheKey(this.cachePrefix, id);
    await this.redisService.del(userKey);

    return { success: true };
  }
}
