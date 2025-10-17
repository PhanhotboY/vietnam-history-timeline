import { Module } from '@nestjs/common';
import { EventPeriodService } from './event-period.service';
import { EventPeriodController } from './event-period.controller';

@Module({
  controllers: [EventPeriodController],
  providers: [EventPeriodService],
  exports: [EventPeriodService],
})
export class EventPeriodModule {}
