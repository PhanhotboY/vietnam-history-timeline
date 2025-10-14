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
import { Permissions, SetAuthMetadata } from '@/common/decorators';
import { Request } from 'express';
import { APP } from '@shared/constants';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Permissions(['user', 'createAny'])
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('me')
  @Permissions(['user', 'readOwn'])
  getMe(@Req() req: Request) {
    return this.userService.findUserById(req.user?.userId);
  }

  @Get('immediate')
  // @Permissions(['user', 'readAny'])
  @SetAuthMetadata(APP.BYPASS_AUTHENTICATION)
  // @cacheable
  getImmediate() {
    return { success: true };
  }
}
