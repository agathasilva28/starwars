import { Controller, Get } from "@nestjs/common";
import { StatsService } from "./stats.service";
import { RedisService } from '../common/redis.service';

@Controller("stats")
export class StatsController {
  constructor(
    private statsService: StatsService,
    private readonly redis: RedisService,
) {}

  @Get()
  async getStats() {
    const cached = await this.redis.get('stats:search');

    if (!cached) {
      const stats = await this.statsService.recomputeStats();
      return stats;
    }

    return JSON.parse(cached);
  }
}