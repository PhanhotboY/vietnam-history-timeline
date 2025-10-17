import { createClient } from '@keyv/redis';
import { Provider } from '@nestjs/common';
import { ConfigService } from './config.service';

export const REDIS_CLIENT = 'REDIS_CLIENT';

export const redisProvider: Provider = {
  provide: REDIS_CLIENT,
  useFactory: async (configService: ConfigService) => {
    const client = createClient({
      url: configService.get('redis.url'),
    });
    await client.connect().then(() => {
      console.log('Connected to Redis');
    });
    return client;
  },
  inject: [ConfigService],
};
