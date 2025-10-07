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
import { SetAuthMetadata } from '@/common/decorators/auth.metadata.decorator';
import { APP } from '@shared/constants';

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourceService.create(createResourceDto);
  }

  @Get()
  @SetAuthMetadata(APP.BYPASS_AUTHENTICATION)
  findAll() {
    return this.resourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceService.remove(+id);
  }
}
