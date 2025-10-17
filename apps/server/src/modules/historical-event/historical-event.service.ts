import { RedisService, RedisServiceType } from '@/common';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@/database';
import {
  CreateHistoricalEventDto,
  HistoricalEventDetailDto,
  QueryHistoricalEventDto,
  UpdateHistoricalEventDto,
} from '@shared/dto/historical-event';
import { HistoricalEventBriefDto } from '@shared/dto/historical-event';

@Injectable()
export class HistoricalEventService {
  readonly cachePrefix = 'historicalEvent:';

  constructor(
    private readonly prisma: PrismaService,
    @Inject(RedisService)
    private readonly redisService: RedisServiceType,
  ) {}

  async createEvent(
    authorId: string,
    payload: CreateHistoricalEventDto,
  ): Promise<HistoricalEventBriefDto> {
    const role = await this.prisma.historicalEvent.create({
      data: { ...payload, authorId },
    });

    // Clear cache
    await this.redisService.del(this.cachePrefix);

    return role;
  }

  async getEvents(
    query: QueryHistoricalEventDto,
  ): Promise<HistoricalEventBriefDto[]> {
    const {
      page = 1,
      limit = 10,
      categoryIds,
      fromDay,
      fromMonth,
      fromYear,
      toDay,
      toMonth,
      toYear,
      sortOrder = 'desc',
      sortBy = 'fromYear',
    } = query;
    // const where: HistoricalEventWhereInput = {};
    const options: Parameters<typeof this.prisma.historicalEvent.findMany>[0] =
      {
        where: {},
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
      };

    if (categoryIds && categoryIds.length > 0) {
      options!.where!.categoryIds = {
        hasSome: categoryIds,
      };
    }

    const hasFromYear = fromYear !== undefined;
    const hasFromMonth = fromMonth !== undefined;
    const hasFromDay = fromDay !== undefined;
    const hasToYear = toYear !== undefined;
    const hasToMonth = toMonth !== undefined;
    const hasToDay = toDay !== undefined;
    if (hasFromYear) {
      options!.where!.fromYear = fromYear;
    }

    if (hasFromMonth && hasFromYear) {
      options!.where!.fromMonth = fromMonth;
    }

    if (hasFromDay && hasFromMonth && hasFromYear) {
      options!.where!.fromDay = fromDay;
    }
    if (hasToYear) {
      options!.where!.toYear = toYear;
    }

    if (hasToMonth && hasToYear) {
      options!.where!.toMonth = toMonth;
    }

    if (hasToDay && hasToMonth && hasToYear) {
      options!.where!.toDay = toDay;
    }

    let events: HistoricalEventBriefDto[] = await this.redisService.hGet(
      this.cachePrefix,
      JSON.stringify(options),
    );
    if (events) {
      return events;
    }

    events = await this.prisma.historicalEvent.findMany(options);
    this.redisService.hSet(this.cachePrefix, JSON.stringify(options), events);

    return events;
  }

  async getEventById(id: string): Promise<HistoricalEventDetailDto> {
    const cacheKey = `${this.cachePrefix}${id}`;
    let event: HistoricalEventDetailDto | undefined | null =
      await this.redisService.get(cacheKey);
    if (event) {
      return event;
    }

    event = await this.prisma.historicalEvent.findUnique({
      where: { id },
      include: {
        author: {
          include: {
            avatar: true,
          },
        },
        categories: true,
      },
    });

    this.redisService.set(cacheKey, event);
    if (!event) {
      throw new NotFoundException('Sự kiện lịch sử không tồn tại');
    }

    return event;
  }

  async updateEvent(id: string, payload: UpdateHistoricalEventDto) {
    const event = await this.getEventById(id);
    if (!event) {
      throw new NotFoundException('Sự kiện lịch sử không tồn tại');
    }
    const updated = await this.prisma.historicalEvent.update({
      where: { id },
      data: payload,
    });

    // Clear cache
    await this.redisService.del(this.cachePrefix);
    await this.redisService.del(`${this.cachePrefix}${id}`);

    return updated;
  }

  async deleteEvent(id: string, userId: string) {
    const event = await this.prisma.historicalEvent.findUnique({
      where: { id, authorId: userId },
    });
    if (!event) {
      throw new NotFoundException('Sự kiện lịch sử không tồn tại');
    }

    await this.prisma.historicalEvent.delete({ where: { id } });

    // Clear cache
    await this.redisService.del(this.cachePrefix);
    await this.redisService.del(`${this.cachePrefix}${id}`);

    return { success: true };
  }
}
