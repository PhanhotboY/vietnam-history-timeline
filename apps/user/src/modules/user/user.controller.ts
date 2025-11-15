import { Controller, Delete, Get, Post, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Permissions } from '@phanhotboy/nsv-jwt-auth';
import {
  Serialize,
  UserFullResponseDto,
  UserQueryDto,
} from '@phanhotboy/nsv-common';
import type { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Permissions(['user', 'readAny'])
  @Serialize(UserFullResponseDto)
  getAllUsers(@Query() query: UserQueryDto) {
    return this.userService.queryUsers(query);
  }

  @Get('me')
  @Permissions(['user', 'readOwn'])
  @Serialize(UserFullResponseDto)
  getMe(@Req() req: Request) {
    return this.userService.findUserById(req.user!.userId);
  }

  @Delete(':id')
  @Permissions(['user', 'deleteAny'])
  deleteUser(@Req() req: Request) {
    return this.userService.deleteUser(req.params.id);
  }
}
