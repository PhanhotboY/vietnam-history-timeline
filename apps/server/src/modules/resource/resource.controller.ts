import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResourceService } from './resource.service';
import { CreateResourceDto } from '@shared/dto/resource';
import { Permissions } from '@/common/decorators';

@Controller('resources')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  @Permissions(['resource', 'createAny'])
  create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourceService.create(createResourceDto);
  }

  @Get()
  @Permissions(['resource', 'readAny'])
  findAll() {
    return this.resourceService.findAll();
  }

  @Get(':id')
  @Permissions(['resource', 'readAny'])
  findOne(@Param('id') id: string) {
    return this.resourceService.findOne(id);
  }

  @Delete(':id')
  @Permissions(['resource', 'deleteAny'])
  remove(@Param('id') id: string) {
    return this.resourceService.remove(id);
  }
}
