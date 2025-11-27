import { Global, Module } from '@nestjs/common';
import { Queue, Worker } from 'bullmq';
import { BullmqService } from './bullmq.service';

@Global()
@Module({
  providers: [BullmqService],
  exports: [BullmqService],
})
export class BullmqModule {}