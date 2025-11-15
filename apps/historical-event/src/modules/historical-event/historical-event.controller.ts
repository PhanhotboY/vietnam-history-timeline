import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { HistoricalEventService } from './historical-event.service';
import { Permissions } from '@phanhotboy/nsv-jwt-auth';
import {
  HistoricalEventBaseCreateDto,
  HistoricalEventBaseDto,
  HistoricalEventBaseUpdateDto,
  HistoricalEventBriefResponseDto,
  HistoricalEventDetailResponseDto,
  HistoricalEventPreviewResponseDto,
  HistoricalEventQueryDto,
  Serialize,
  User,
} from '@phanhotboy/nsv-common';

@Controller('historical-events')
export class HistoricalEventController {
  constructor(
    private readonly historicalEventService: HistoricalEventService,
  ) {}

  @Get()
  @Permissions(['historical-event', 'readAny'])
  @Serialize(HistoricalEventBriefResponseDto)
  getAllHistoricalEvents(@Query() query: HistoricalEventQueryDto) {
    return this.historicalEventService.getEvents(query);
  }

  @Post()
  @Permissions(['historical-event', 'createAny'])
  createHistoricalEvent(
    @Body() event: HistoricalEventBaseCreateDto,
    @User('userId') authorId: string,
  ) {
    return this.historicalEventService.createEvent(authorId, event);
  }

  @Get(':id/preview')
  @Permissions(['historical-event', 'readAny'])
  @Serialize(HistoricalEventPreviewResponseDto)
  getHistoricalEventPreviewById(@Param('id') id: string) {
    return this.historicalEventService.getEventById(id);
  }

  @Get(':id')
  @Permissions(['historical-event', 'readAny'])
  @Serialize(HistoricalEventDetailResponseDto)
  getHistoricalEventById(@Param('id') id: string) {
    return this.historicalEventService.getEventById(id);
  }

  @Put(':id')
  @Permissions(['historical-event', 'updateAny'])
  @Serialize(HistoricalEventBaseDto)
  updateHistoricalEvent(
    @Param('id') id: string,
    @Body() event: HistoricalEventBaseUpdateDto,
  ) {
    return this.historicalEventService.updateEvent(id, event);
  }

  @Delete(':id')
  @Permissions(['historical-event', 'deleteAny'])
  deleteHistoricalEvent(
    @Param('id') id: string,
    @User('userId') userId: string,
  ) {
    return this.historicalEventService.deleteEvent(id, userId);
  }
}
