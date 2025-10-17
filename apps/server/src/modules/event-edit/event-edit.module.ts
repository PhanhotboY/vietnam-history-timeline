import { Module } from '@nestjs/common';
import { EventEditService } from './event-edit.service';
import { EventEditController } from './event-edit.controller';

@Module({
  controllers: [EventEditController],
  providers: [EventEditService],
  exports: [EventEditService],
})
export class EventEditModule {}
