import { PrismaService } from '@/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma-client/index';
import { CreateUserDto } from '@shared/dto/user';
import { isUUID } from 'class-validator';
import { RedisService } from '../../common/providers';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly redisService: RedisService,
  ) {}

  async createUser(user: CreateUserDto) {
    return await this.prisma.user.create({ data: user });
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
    const include = {
      ...(options?.withPassword ? {} : { password: false, salt: false }),
      ...(options?.withRole ? { role: true } : { roleId: false, role: false }),
    };

    let user: (User & { role: { name: string; slug: string } }) | null = null;
    const userKey = `user:${id}`;

    user = await this.redisService.hGet(userKey, JSON.stringify(include));
    if (user) {
      return user;
    }

    if (isUUID(id)) {
      user = await this.prisma.user.findUnique({
        where: { id },
        include,
      });
    } else {
      user = await this.prisma.user.findFirst({
        where: {
          OR: [{ email: id }, { username: id }],
        },
        include,
      });
    }

    await this.redisService.hSet(
      userKey,
      JSON.stringify(include),
      user || null,
    );

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
