import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SearchModule } from './search/search.module';
import { MoviesModule } from './movies/movies.module';
import { PeopleModule } from './people/people.module';
import { StatsModule } from './stats/stats.module';
import { RequestStats } from './entities/request-stats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestLoggerMiddleware } from './middleware/request-logger.middleware';
import { BullmqModule } from './bullmq/bullmq.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL,
      synchronize: true,
      autoLoadEntities: true,
      entities: [RequestStats],
    }),
    ScheduleModule.forRoot(),
    BullmqModule,
    MoviesModule,
    SearchModule,
    PeopleModule,
    StatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestLoggerMiddleware)
      .exclude('stats')
      .forRoutes('*');
  }
}
