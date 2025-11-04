import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { middleware } from './app.middleware';
import { Config, configuration } from './config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const rmqService = app.get(RmqService);
  // app.connectMicroservice(rmqService.getOptions('auth_queue'));

  middleware(app);

  // Global prefix
  app.setGlobalPrefix('/api/v1');

  const port = process.env.NODE_PORT || 3000;

  app.enableShutdownHooks();
  // await app.startAllMicroservices();
  await app.listen(port);
  console.log(
    `NestJS Auth service is running on port ${port} in ${process.env.NODE_ENV} mode`,
  );
}
bootstrap();
