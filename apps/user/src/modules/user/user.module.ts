import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserConsumer } from './user.consumer';
import { RmqModule } from '@phanhotboy/nsv-common';
import { RMQ } from '@user/constants';

@Module({
  imports: [RmqModule.register({ name: RMQ.CLIENT_NAME })],
  controllers: [UserController, UserConsumer],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
