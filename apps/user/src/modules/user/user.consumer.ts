import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService, UserRegisterDto } from '@phanhotboy/nsv-common';
import { UserService } from './user.service';

@Controller()
export class UserConsumer {
  constructor(
    private readonly userService: UserService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('user.registered')
  async handleUserRegisteredEvent(
    @Payload() data: UserRegisterDto,
    @Ctx() context: RmqContext,
  ) {
    await this.userService.handleUserRegister(data);
    return this.rmqService.ack(context);
  }
}
