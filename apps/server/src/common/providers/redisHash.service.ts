import { Injectable, Inject } from '@nestjs/common';
import { RedisClientType } from '@keyv/redis';
import { REDIS_CLIENT } from './redisClient.provider';

/**
 * Extended Redis service to handle hash operations with JSON serialization
 * @description ```ts
 * // use Inject with Type for better TS typing
 * constructor(@Inject(RedisService) private redisService: RedisServiceType) {}
 * ```
 */
@Injectable()
export class RedisService {
  constructor(
    @Inject(REDIS_CLIENT) private readonly redisClient: RedisClientType,
  ) {
    return new Proxy(this, {
      get(target, prop) {
        if (prop in target) {
          return Reflect.get(target, prop);
        }

        const value = Reflect.get(target.redisClient, prop);
        if (typeof value === 'function') {
          return value.bind(target.redisClient);
        }
        return value;
      },
    });
  }

  // Set hash field
  hSet(key: string, field: string, value: any) {
    return this.redisClient.hSet(key, field, JSON.stringify(value as any));
  }

  // Get hash field
  async hGet(key: string, field: string) {
    const value = await this.redisClient.hGet(key, field);
    return value ? JSON.parse(value) : null;
  }

  // Get all hash fields
  async hGetAll(key: string) {
    const data = await this.redisClient.hGetAll(key);
    const result: Record<string, any> = {};
    for (const [field, value] of Object.entries(data)) {
      try {
        result[field] = JSON.parse(value as string);
      } catch {
        result[field] = value;
      }
    }
    return result;
  }

  // Set multiple fields
  async hMSet(key: string, data: Record<string, any>): Promise<void> {
    const serialized: Record<string, string> = {};
    for (const [field, value] of Object.entries(data)) {
      serialized[field] = JSON.stringify(value);
    }
    await this.redisClient.hSet(key, serialized);
  }

  // Delete hash field
  async hDel(key: string, ...fields: string[]): Promise<number> {
    return await this.redisClient.hDel(key, fields);
  }

  // Get all values
  async hVals(key: string): Promise<any[]> {
    const values = await this.redisClient.hVals(key);
    return values.map((v: string) => {
      try {
        return JSON.parse(v);
      } catch {
        return v;
      }
    });
  }

  // Set field with expiration (custom implementation)
  async hSetWithExpiry(
    key: string,
    field: string,
    value: any,
    ttlSeconds: number,
  ): Promise<void> {
    await this.hSet(key, field, value);
    await this.redisClient.expire(key, ttlSeconds);
  }

  async get(key: string) {
    const value = await this.redisClient.get(key);
    return value ? JSON.parse(value) : null;
  }
  async set(key: string, value: any) {
    const serializedValue = JSON.stringify(value);
    await this.redisClient.set(key, serializedValue);
  }
}

/**
 * TS type-safe for RedisService
 */
export type RedisServiceType = RedisService &
  Omit<RedisClientType, keyof RedisService>;
