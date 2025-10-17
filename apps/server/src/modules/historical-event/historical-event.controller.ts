import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
} from '@nestjs/common';
import { HistoricalEventService } from './historical-event.service';
import {
  CreateHistoricalEventDto,
  HistoricalEventBriefDto,
  HistoricalEventDetailDto,
  QueryHistoricalEventDto,
  UpdateHistoricalEventDto,
} from '@shared/dto/historical-event';
import { Permissions, Serialize } from '@/common';
import { Request } from 'express';

@Controller('historical-events')
export class HistoricalEventController {
  constructor(
    private readonly historicalEventService: HistoricalEventService,
  ) {}

  @Post()
  @Permissions(['historical-event', 'createOwn'])
  @Serialize(HistoricalEventBriefDto)
  create(
    @Body() createHistoricalEventDto: CreateHistoricalEventDto,
    @Req() req: Request,
  ) {
    return this.historicalEventService.createEvent(
      req.user.userId,
      createHistoricalEventDto,
    );
  }

  @Get()
  @Permissions(['historical-event', 'readAny'])
  @Serialize(HistoricalEventBriefDto)
  findAll(@Query() query: QueryHistoricalEventDto) {
    return this.historicalEventService.getEvents(query);
  }

  @Get(':id')
  @Permissions(['historical-event', 'readAny'])
  @Serialize(HistoricalEventDetailDto)
  findOne(@Param('id') id: string) {
    return this.historicalEventService.getEventById(id);
  }

  @Delete(':id')
  @Permissions(['historical-event', 'deleteOwn'])
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.historicalEventService.deleteEvent(id, req.user.userId);
  }

  @Patch(':id')
  @Permissions(['historical-event', 'updateOwn'])
  update(
    @Param('id') id: string,
    @Body() updateHistoricalEventDto: UpdateHistoricalEventDto,
  ) {
    return this.historicalEventService.updateEvent(
      id,
      updateHistoricalEventDto,
    );
  }
}
