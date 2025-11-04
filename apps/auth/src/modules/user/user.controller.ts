import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import type { Request } from 'express';
import { UserBriefDto } from './dto';
import { Permissions } from '@phanhotboy/nsv-jwt-auth';
import { Serialize } from '@phanhotboy/nsv-common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @Permissions(['user', 'readOwn'])
  @Serialize(UserBriefDto)
  getMe(@Req() req: Request) {
    return this.userService.findUserById(req.user!.userId, {
      withPassword: true,
    });
  }
}
