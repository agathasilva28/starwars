import { Injectable } from '@nestjs/common';
import { Queue, Worker, QueueEvents } from 'bullmq';
import { RedisOptions } from 'ioredis';

@Injectable()
export class BullmqService {
  private readonly redisConfig: RedisOptions = {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: Number(process.env.REDIS_PORT ?? 6379),
  };

  getQueue(name: string) {
    return new Queue(name, {
      connection: this.redisConfig,
    });
  }

  createWorker(
    name: string,
    processor: (job: any) => any,
  ) {
    return new Worker(name, processor, {
      connection: this.redisConfig,
    });
  }

  createQueueEvents(name: string) {
    return new QueueEvents(name, {
      connection: this.redisConfig,
    });
  }
}