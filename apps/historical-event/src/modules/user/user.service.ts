import { PrismaService } from '@historical-event/database';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { isUUID } from 'class-validator';

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
  private readonly cacheKey: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly util: UtilService,
    @Inject(RMQ.TOPIC_EVENTS_EXCHANGE) private readonly rmq: ClientProxy,
    @Inject(RedisService) private readonly redisService: RedisServiceType,
  ) {
    this.cacheKey = this.util.genCacheKey(this.cachePrefix);
  }

  async createUser(user: UserBaseDto) {
    const newUser = await this.prisma.user.create({
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        slug: user.slug || user.email.split('@')[0]!,
        avatarId: user.avatarId,
      },
    });

    await this.redisService.del(this.cacheKey);

    return newUser;
  }

  async handleUserRegister(data: UserBaseDto) {
    return await this.createUser({
      ...data,
      slug: data.email.split('@')[0]!,
      firstName: data.email.split('@')[0]!,
    });
  }

  async findUserById(id: string) {
    const options = { where: { id } } satisfies Parameters<
      typeof this.prisma.user.findUnique
    >[0];

    return this.util.handleHashCachingQuery(
      {
        cacheKey: this.cacheKey,
        hashAttribute: options,
        notFoundMessage: 'Người dùng không tồn tại',
      },
      () => {
        if (isUUID(id)) {
          return this.prisma.user.findUnique(options);
        } else {
          throw new NotFoundException('Người dùng không tồn tại');
        }
      },
    );
  }

  async deleteUser(id: string) {
    await this.findUserById(id); // Ensure user exists

    await this.prisma.user.delete({ where: { id } });
    this.rmq.emit(
      USER_EVENT.DELETED,
      plainToInstance(UserDeleteDto, { userId: id }),
    );

    await this.redisService.del(this.cacheKey);

    return { success: true };
  }
}
