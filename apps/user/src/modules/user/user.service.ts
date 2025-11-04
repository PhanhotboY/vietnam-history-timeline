import { PrismaService } from '@user/database';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@user-prisma';
import { CreateUserDto } from '@user/modules/user/dto';
import { isUUID } from 'class-validator';
import {
  RedisService,
  type RedisServiceType,
  UserRegisterDto,
} from '@phanhotboy/nsv-common';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    @Inject(RedisService) private readonly redisService: RedisServiceType,
  ) {}

  async createUser(user: CreateUserDto) {
    return await this.prisma.user.create({ data: user });
  }

  async handleUserRegister(data: UserRegisterDto) {
    return await this.createUser({
      ...data,
      slug: data.username,
      firstName: data.username,
    });
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findUserById(
    id: string,
    options?: { withRole?: boolean; withPassword?: boolean },
  ) {
    // Have to include nested relation explicitly
    // Exclude fields using false since including using true will throw error
    const omit = {
      ...(options?.withPassword
        ? {}
        : ({ password: false, salt: false } as const)),
    };

    let user: User | null = null;
    const userKey = `user:${id}`;

    user = await this.redisService.hGet(userKey, JSON.stringify(omit));
    if (user) {
      return user;
    }

    if (isUUID(id)) {
      user = await this.prisma.user.findUnique({
        where: { id },
        omit,
      });
    } else {
      user = await this.prisma.user.findFirst({
        where: {
          OR: [{ email: id }, { username: id }],
        },
        omit,
      });
    }

    await this.redisService.hSet(userKey, JSON.stringify(omit), user || null);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async deleteUser(id: string) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
