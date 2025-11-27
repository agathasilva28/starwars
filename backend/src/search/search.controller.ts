import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async search(
    @Query('type') type: 'people' | 'movie' = 'people',
    @Query('q') query: string,
  ) {
    return this.searchService.search(type, query);
  }
}