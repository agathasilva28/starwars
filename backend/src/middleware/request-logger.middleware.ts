import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { StatsService } from "../stats/stats.service";

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private statsService: StatsService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const start = performance.now();

    res.on('finish', () => {
      const total = Math.round(performance.now() - start);

      this.statsService.saveStats(
        req.path.split('/')[1],
        { ...req.query, ...req.params },
        total
      );
    });

    next();
  }
}