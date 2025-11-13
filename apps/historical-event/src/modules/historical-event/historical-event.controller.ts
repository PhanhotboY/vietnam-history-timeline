import { Controller, Get } from '@nestjs/common';
import { HistoricalEventService } from './historical-event.service';

@Controller()
export class HistoricalEventController {
  constructor(
    private readonly historicalEventService: HistoricalEventService,
  ) {}

  @Get()
  getHello() {
    return this.historicalEventService.getEvents({});
  }
}
