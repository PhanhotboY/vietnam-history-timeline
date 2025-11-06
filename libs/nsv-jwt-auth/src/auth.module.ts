import { Module } from '@nestjs/common';
import { AuthUtilService } from './util';
import { ConfigurableModuleClass } from './auth.module-definition';
import { JwtStrategy } from './strategies';

@Module({
  providers: [AuthUtilService, JwtStrategy],
  exports: [AuthUtilService],
})
export class JwtAuthModule extends ConfigurableModuleClass {}
