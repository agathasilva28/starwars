import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RequestStats } from "../entities/request-stats.entity";
import { Repository } from "typeorm";
import { RedisService } from "../common/redis.service";

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(RequestStats)
    private statsRepository: Repository<RequestStats>,
    private redis: RedisService,
  ) {}

  async saveStats(route: string, query: any, time: number) {
    const stat = this.statsRepository.create({
      route,
      query_params: query,
      response_time_ms: time,
    });

    await this.statsRepository.save(stat);
  }

  async recomputeStats() {
    const logs = await this.statsRepository.find({
      where: { route: 'search' },
    });

    if (logs.length === 0) {
      await this.redis.set("stats:search", JSON.stringify({
        topQueries: [],
        avgResponseTime: 0,
        peakHour: null,
        total: 0
      }));
      return;
    }

    const queryCount: Record<string, number> = {};

    logs.forEach(log => {
      const q = log.query_params?.q ?? 'unknown';
      queryCount[q] = (queryCount[q] || 0) + 1;
    });

    const totalQueries = logs.length;

    const topQueries = Object.entries(queryCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([query, count]) => ({
        query,
        count,
        percentage: Number(((count / totalQueries) * 100).toFixed(2)),
      }));

    const avgResponseTime = Math.round(
      logs.reduce((acc, log) => acc + log.response_time_ms, 0) / logs.length
    );

    const hourCount: Record<number, number> = {};

    logs.forEach(log => {
      const hour = new Date(log.created_at).getHours();
      hourCount[hour] = (hourCount[hour] || 0) + 1;
    });

    const peakHour = Object.entries(hourCount)
      .sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;


    const stats = {
      total: totalQueries,
      topQueries,
      avgResponseTime,
      peakHour: Number(peakHour),
      updatedAt: new Date().toISOString(),
    };

    await this.redis.set("stats:search", JSON.stringify(stats));

    return stats;
  }
}