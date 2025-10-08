import { PrismaService } from '@/database';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma-client/index';
import { UpdateUserDto, CreateUserDto } from '@shared/dto/user';
import { isUUID } from 'class-validator';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findByUsername({ username }: { username: string }) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

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

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
