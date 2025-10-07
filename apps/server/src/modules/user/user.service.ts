import { PrismaService } from '@/database';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findUserById(id: string) {
    const include = {
      role: {
        select: {
          name: true,
          slug: true,
        },
      },
    };

    if (isUUID(id)) {
      return await this.prisma.user.findUnique({
        where: { id },
        include,
      });
    }

    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: id }, { username: id }],
      },
      include,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
