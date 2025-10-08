import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggerContextMiddleware } from './middleware';
import { ApiKeyGuard } from './guards';
import * as providers from './providers';
import { ApiKeyModule } from '@/modules/api-key';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { KeyTokenModule } from '@/modules/key-token';

const services = Object.values(providers);

@Global()
@Module({
  imports: [
    ApiKeyModule,
    JwtModule.registerAsync({
      useFactory: async (configService: providers.ConfigService) => ({
        secret: configService.get('jwtSecret'),
      }),
      inject: [providers.ConfigService],
    }),
  ],
  providers: [
    JwtService,
    ...services,
    // {
    //   provide: APP_GUARD,
    //   useClass: ApiKeyGuard,
    // },
  ],
  exports: [...services, JwtService],
})
export class CommonModule implements NestModule {
  // Global Middleware
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerContextMiddleware).forRoutes('{*splat}');
  }
}
