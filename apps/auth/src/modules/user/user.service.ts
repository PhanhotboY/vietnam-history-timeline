import { PrismaService } from '@auth/database';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@auth-prisma';
import { isUUID } from 'class-validator';
import {
  RedisService,
  UserAuthCreateDto,
  UtilService,
  type RedisServiceType,
} from '@phanhotboy/nsv-common';

@Injectable()
export class UserService {
  private readonly cachePrefix = 'user';

  constructor(
    private readonly prisma: PrismaService,
    private readonly util: UtilService,
    @Inject(RedisService) private readonly redisService: RedisServiceType,
  ) {}

  async createUser(user: UserAuthCreateDto) {
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
    const userKey = this.util.genCacheKey(this.cachePrefix, id);

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

  async deleteUser(id: string) {
    const user = await this.prisma.user.delete({ where: { id } });
    const userKey = this.util.genCacheKey(this.cachePrefix, id);
    await this.redisService.del(userKey);
    return user;
  }
}
