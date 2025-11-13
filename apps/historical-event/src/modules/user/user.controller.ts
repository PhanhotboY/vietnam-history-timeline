import { Controller, Delete, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Permissions } from '@phanhotboy/nsv-jwt-auth';
import { Serialize } from '@phanhotboy/nsv-common';
import type { Request } from 'express';
import { UserBaseResponseDto } from '@phanhotboy/nsv-common/dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @Permissions(['user', 'readOwn'])
  @Serialize(UserBaseResponseDto)
  getMe(@Req() req: Request) {
    return this.userService.findUserById(req.user!.userId);
  }

  @Delete(':id')
  @Permissions(['user', 'deleteAny'])
  deleteUser(@Req() req: Request) {
    return this.userService.deleteUser(req.params.id);
  }
}
