import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import KeyvRedis, { RedisClientType } from '@keyv/redis';
import { REDIS_CLIENT } from './redisClient.provider';

@Injectable()
export class RedisHashService {
  constructor(
    @Inject(REDIS_CLIENT) private readonly redisClient: RedisClientType,
  ) {}

  // Set hash field
  hSet(key: string, field: string, value: any) {
    return this.redisClient.hSet(key, field, JSON.stringify(value));
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

  // Check if field exists
  hExists(key: string, field: string) {
    return this.redisClient.hExists(key, field);
  }

  // Get hash field count
  hLen(key: string) {
    return this.redisClient.hLen(key);
  }

  // Get all field names
  hKeys(key: string) {
    return this.redisClient.hKeys(key);
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
}
