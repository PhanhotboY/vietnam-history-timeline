import { Module } from '@nestjs/common';
import { HistoricalEventService } from './historical-event.service';
import { HistoricalEventController } from './historical-event.controller';

@Module({
  controllers: [HistoricalEventController],
  providers: [HistoricalEventService],
  exports: [HistoricalEventService],
})
export class HistoricalEventModule {}
