import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { StatsQueue } from './stats.queue';

@Injectable()
export class StatsScheduler {
  constructor(private statsQueue: StatsQueue) {
    console.log("StatsScheduler inicializado");
  }

  @Cron('*/5 * * * *')
  async scheduleStats() {
    console.log("CRON DISPAROU")
    await this.statsQueue.addComputeStatsJob();
  }
}