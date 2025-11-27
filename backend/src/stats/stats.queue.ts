import { Injectable } from '@nestjs/common';
import { BullmqService } from '../bullmq/bullmq.service';

@Injectable()
export class StatsQueue {
  private queue;

  constructor(private bull: BullmqService) {
    this.queue = this.bull.getQueue('stats');
  }

  async addComputeStatsJob() {
    await this.queue.add("compute-stats", {}, { removeOnComplete: true });
  }
}