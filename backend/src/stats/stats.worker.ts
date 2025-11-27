import { Injectable } from '@nestjs/common';
import { BullmqService } from '../bullmq/bullmq.service';
import { StatsService } from './stats.service';

@Injectable()
export class StatsWorker {
  constructor(
    private bull: BullmqService,
    private statsService: StatsService,
  ) {
    this.bull.createWorker(
      'stats',
      async job => {
        if (job.name === 'compute-stats') {
          await this.statsService.recomputeStats();
        }
      },
    );
  }
}