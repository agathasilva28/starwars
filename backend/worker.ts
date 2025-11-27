import { NestFactory } from "@nestjs/core";
import { Worker } from "bullmq";
import { AppModule } from "src/app.module";
import { StatsService } from "src/stats/stats.service";

console.log("Worker booting…");

const worker = new Worker(
  "stats",
  async (job) => {
    if (job.name === "compute-stats") {
      const app = await NestFactory.createApplicationContext(AppModule);
      const statsService = app.get(StatsService);

      await statsService.recomputeStats();
      console.log("Stats recalculated!");
    }
  },
  {
    connection: {
      host: process.env.REDIS_HOST || "redis",
      port: Number(process.env.REDIS_PORT || 6379),
    }
  }
);

worker.on("ready", () => console.log("Worker connected to Redis"));

worker.on("completed", job => console.log(`Job ${job.id} completed`));

worker.on("failed", (job, err) => console.error(`Job ${job?.id} failed:`, err));