import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Permissions } from '@phanhotboy/nsv-jwt-auth';
import { Serialize } from '@phanhotboy/nsv-common';
import type { Request } from 'express';
import { UserBaseDto, UserBaseResponseDto } from '@phanhotboy/nsv-common/dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @Permissions(['user', 'readOwn'])
  @Serialize(UserBaseResponseDto)
  getMe(@Req() req: Request) {
    return this.userService.findUserById(req.user!.userId);
  }

  @Post()
  @Permissions(['user', 'createAny'])
  createUser(@Body() user: UserBaseDto) {
    return this.userService.createUser(user);
  }

  @Delete(':id')
  @Permissions(['user', 'deleteAny'])
  deleteUser(@Req() req: Request) {
    return this.userService.deleteUser(req.params.id);
  }
}
