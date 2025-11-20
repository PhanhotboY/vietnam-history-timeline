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
  UserQueryDto,
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
      data: { ...user, slug: user.slug || user.email.split('@')[0]! },
    });
  }

  async handleUserRegister(data: UserBaseDto) {
    return await this.createUser({
      ...data,
      avatarId: '',
      firstName: data.email.split('@')[0]!,
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

  async queryUsers(query: UserQueryDto) {
    const {
      page = 1,
      limit = 10,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      status,
      sex,
      birthdateFrom,
      birthdateTo,
      createdAtFrom,
      createdAtTo,
    } = query;

    // Build where clause
    const where: any = {};

    // Search across multiple fields
    if (search) {
      where.OR = [
        { email: { contains: search, mode: 'insensitive' } },
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { slug: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Filter by status
    if (status) {
      where.status = status;
    }

    // Filter by sex
    if (sex) {
      where.sex = sex;
    }

    // Filter by birthdate range
    if (birthdateFrom || birthdateTo) {
      where.birthdate = {};
      if (birthdateFrom) {
        where.birthdate.gte = birthdateFrom;
      }
      if (birthdateTo) {
        where.birthdate.lte = birthdateTo;
      }
    }

    // Filter by createdAt range
    if (createdAtFrom || createdAtTo) {
      where.createdAt = {};
      if (createdAtFrom) {
        where.createdAt.gte = createdAtFrom;
      }
      if (createdAtTo) {
        where.createdAt.lte = createdAtTo;
      }
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Execute query with count
    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          slug: true,
          avatarId: true,
          status: true,
          sex: true,
          birthdate: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      data: users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
