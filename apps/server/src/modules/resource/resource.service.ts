import { PrismaService } from '@/database';
import { Injectable } from '@nestjs/common';
import { CreateResourceDto } from '@shared/dto/resource';
import { isUUID } from 'class-validator';

@Injectable()
export class ResourceService {
  constructor(private prisma: PrismaService) {}

  async create(createResourceDto: CreateResourceDto) {
    const foundResource = await this.prisma.resource.findFirst({
      where: {
        OR: [
          { name: createResourceDto.name },
          { slug: createResourceDto.slug },
        ],
      },
    });
    if (foundResource) {
      throw new Error('Resource already exists');
    }
    return this.prisma.resource.create({ data: createResourceDto });
  }

  findAll() {
    return this.prisma.resource.findMany();
  }

  findOne(id: string) {
    return this.prisma.resource.findUnique({
      where: isUUID(id) ? { id } : { slug: id },
    });
  }

  remove(id: string) {
    return this.prisma.resource.delete({ where: { id } });
  }
}
