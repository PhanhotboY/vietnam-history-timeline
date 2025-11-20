import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService, USER_EVENT, UserDeleteDto } from '@phanhotboy/nsv-common';

@Controller()
export class UserConsumer {
  constructor(
    private readonly userService: UserService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern(USER_EVENT.DELETED)
  async handleUserDeleted(
    @Payload() data: UserDeleteDto,
    @Ctx() context: RmqContext,
  ) {
    await this.userService.deleteUser(data.userId);
    return this.rmqService.ack(context);
  }
}
