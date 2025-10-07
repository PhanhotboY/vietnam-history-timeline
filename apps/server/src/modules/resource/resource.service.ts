import { PrismaService } from '@/database';
import { Injectable } from '@nestjs/common';
import { CreateResourceDto } from '@shared/dto/resource';

@Injectable()
export class ResourceService {
  constructor(private prisma: PrismaService) {}

  create(createResourceDto: CreateResourceDto) {
    return 'This action adds a new resource';
  }

  findAll() {
    return this.prisma.resource.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} resource`;
  }

  remove(id: number) {
    return `This action removes a #${id} resource`;
  }
}
