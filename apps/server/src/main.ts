import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { middleware } from './app.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  middleware(app);

  // Global prefix
  app.setGlobalPrefix('/api/v1');

  const port = process.env.NODE_PORT || 3000;

  await app.listen(port);

  process.on('SIGINT', () => cleanup('SIGINT'));
  process.on('SIGTERM', () => cleanup('SIGTERM'));
  process.on('uncaughtException', (e) => {
    console.error('UncaughtException: ', e);
  });

  async function cleanup(sig: string) {
    console.log(`Received kill signal: ${sig}, shutting down gracefully`);
    await app.close();
    console.log('Closed out remaining connections');
    process.exit(0);
  }

  console.log(
    `NestJS application is running on port ${port} in ${process.env.NODE_ENV} mode`,
  );
}

void bootstrap();
