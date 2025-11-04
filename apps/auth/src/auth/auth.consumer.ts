import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@phanhotboy/nsv-common';

@Controller()
export class AuthConsumer {
  constructor(private readonly rmqService: RmqService) {}

  @EventPattern('user.*')
  handleUserEvent(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('User event received:', data);
    this.rmqService.ack(context);
  }
}
