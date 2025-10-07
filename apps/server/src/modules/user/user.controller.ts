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
import { CreateUserDto, UpdateUserDto } from '@shared/dto/user';
import { Permissions } from '@/common/decorators/permission.decorator';
import { Request } from 'express';
import { SetAuthMetadata } from '@/common/decorators/auth.metadata.decorator';
import { APP } from '@shared/constants';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('me')
  @Permissions(['user', 'readOwn'])
  // @SetAuthMetadata(APP.BYPASS_AUTHENTICATION)
  getMe(@Req() req: Request) {
    return this.userService.findUserById(req.user?.userId);
  }
}
