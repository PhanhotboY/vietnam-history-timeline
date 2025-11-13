import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { middleware } from './app.middleware';
import { RmqService } from '@phanhotboy/nsv-common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rmqService = app.get(RmqService);

  app.connectMicroservice(rmqService.getOptions('user_queue', false));

  middleware(app);
  app.setGlobalPrefix('/api/v1');

  app.enableShutdownHooks();
  const port = process.env.NODE_PORT || 3000;

  await app.startAllMicroservices();
  await app.listen(port);
  console.log(
    `NestJS User service is running on port ${port} in ${process.env.NODE_ENV} mode`,
  );
}
bootstrap();
