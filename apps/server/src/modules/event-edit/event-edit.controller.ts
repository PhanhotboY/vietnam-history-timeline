import { Controller } from '@nestjs/common';
import { EventEditService } from './event-edit.service';

@Controller('event-edit')
export class EventEditController {
  constructor(private readonly eventEditService: EventEditService) {}
}
