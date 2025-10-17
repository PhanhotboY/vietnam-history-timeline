import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '@shared/dto/user';
import { Permissions, Serialize, SetAuthMetadata } from '@/common/decorators';
import { Request } from 'express';
import { APP } from '@shared/constants';
import { UserBriefDto } from '@shared/dto/user/response-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @Permissions(['user', 'readOwn'])
  @Serialize(UserBriefDto)
  getMe(@Req() req: Request) {
    return this.userService.findUserById(req.user?.userId, {
      withPassword: true,
    });
  }
}
