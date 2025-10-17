import { Controller } from '@nestjs/common';
import { EventPeriodService } from './event-period.service';

@Controller('event-period')
export class EventPeriodController {
  constructor(private readonly eventPeriodService: EventPeriodService) {}
}
