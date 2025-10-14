import { Module, Scope, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';

import { HttpExceptionsFilter } from './common/filters';
import { loggerOptions } from './config/logger.config';
import { CommonModule } from './common';
import { AuthModule } from './auth';
import { UserModule } from './modules/user/user.module';
import { ApiKeyModule } from './modules/api-key/api-key.module';
import { PrismaModule } from './database';
import { SerializeResponseInterceptor } from './common/interceptors';
import { RoleModule } from './modules/role/role.module';
import { RbacGuard } from './auth/guards/rbac.guard';
import { AccessControl } from 'accesscontrol';
import { MailModule } from './mail/mail.module';
import { OtpModule } from './modules/otp/otp.module';
import { ResourceModule } from './modules/resource/resource.module';
import { KeyTokenModule } from './modules/key-token';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ThrottlerGuard } from '@nestjs/throttler';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { HistoricalEventModule } from './modules/historical-event/historical-event.module';

@Module({
  imports: [
    LoggerModule.forRoot(loggerOptions),
    PrismaModule.forRoot(),
    CommonModule,
    AuthModule,
    UserModule,
    ApiKeyModule,
    RoleModule,
    MailModule,
    OtpModule,
    ResourceModule,
    KeyTokenModule,
    HistoricalEventModule,
  ],
  providers: [
    {
      provide: 'ACCESS_CONTROL',
      useClass: AccessControl,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
      scope: Scope.DEFAULT,
    },
    // Global Guard, Authentication check on all routers
    { provide: APP_GUARD, useClass: JwtAuthGuard, scope: Scope.REQUEST },
    { provide: APP_GUARD, useClass: RbacGuard, scope: Scope.REQUEST },
    // Global Filter, Exception check
    { provide: APP_FILTER, useClass: HttpExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: SerializeResponseInterceptor },
    {
      provide: APP_INTERCEPTOR,
      // Cache GET requests, run after all guards
      useClass: CacheInterceptor,
    },
    // Global Pipe, Validation check
    // https://docs.nestjs.com/pipes#global-scoped-pipes
    // https://docs.nestjs.com/techniques/validation
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        // disableErrorMessages: true,
        transform: true, // transform object to DTO class
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
