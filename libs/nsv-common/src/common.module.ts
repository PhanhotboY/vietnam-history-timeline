import {
  ClassSerializerInterceptor,
  DynamicModule,
  Global,
  Module,
  Scope,
  ValidationPipe,
} from '@nestjs/common';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';

import * as providers from './providers';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { CommonOptionDto } from './dto/option.dto';
import { HttpExceptionsFilter } from './filters';
import { SerializeResponseInterceptor } from './interceptors';
import { LoggerModule } from 'nestjs-pino';
import { loggerOptions } from './config/logger.config';
import { ConfigurableModuleClass } from '@nestjs/cache-manager/dist/cache.module-definition';

const { REDIS_OPTIONS, ...prvds } = providers;
const services = Object.values(prvds);

@Global()
@Module({})
export class CommonModule extends ConfigurableModuleClass {
  static forRoot(options: CommonOptionDto): DynamicModule {
    return {
      ...super.register({}),
      module: CommonModule,
      imports: [
        LoggerModule.forRoot(loggerOptions),
        ConfigModule.forRoot({
          load: [options.configuration],
          cache: true,
        }),
        CacheModule.registerAsync({
          useFactory: async (redisService: providers.RedisServiceType) => ({
            store: [redisService],
          }),
          inject: [providers.RedisService],
        }),
        ThrottlerModule.forRootAsync({
          useFactory: (config: providers.ConfigService) => ({
            throttlers: config.get(options.throttlerConfigKey),
          }),
          inject: [providers.ConfigService],
        }),
      ],
      providers: [
        ...services,
        {
          provide: APP_INTERCEPTOR,
          useClass: CacheInterceptor,
        },
        {
          provide: REDIS_OPTIONS,
          useFactory: (config: providers.ConfigService) =>
            config.get(options.redisConfigKey),
          inject: [providers.ConfigService],
        },
        { provide: APP_FILTER, useClass: HttpExceptionsFilter },
        {
          provide: APP_INTERCEPTOR,
          useClass: ClassSerializerInterceptor,
          scope: Scope.REQUEST,
        },
        {
          provide: APP_INTERCEPTOR,
          useClass: SerializeResponseInterceptor,
        },
        {
          provide: APP_PIPE,
          useValue: new ValidationPipe({
            // disableErrorMessages: true,
            transform: true, // transform object to DTO class
            whitelist: true,
          }),
        },
      ],
      exports: [...services, ConfigModule],
    };
  }
}
