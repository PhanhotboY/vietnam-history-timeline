import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService, USER_EVENT, UserBaseDto } from '@phanhotboy/nsv-common';
import { UserService } from './user.service';

@Controller()
export class UserConsumer {
  constructor(
    private readonly userService: UserService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern(USER_EVENT.REGISTERED)
  async handleUserRegisteredEvent(
    @Payload() data: UserBaseDto,
    @Ctx() context: RmqContext,
  ) {
    await this.userService.handleUserRegister(data);
    return this.rmqService.ack(context);
  }
}
