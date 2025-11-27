import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RequestStats } from "../entities/request-stats.entity";
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { StatsQueue } from './stats.queue';
import { StatsWorker } from './stats.worker';
import { StatsScheduler } from './stats.scheduler';
import { RedisService } from 'src/common/redis.service';

@Module({
  imports: [TypeOrmModule.forFeature([RequestStats])],
  controllers: [StatsController],
  providers: [
    StatsService,
    StatsQueue,
    StatsWorker,
    StatsScheduler,
    RedisService,
  ],
  exports: [StatsService],
})
export class StatsModule {}