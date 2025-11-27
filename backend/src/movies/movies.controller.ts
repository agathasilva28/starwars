import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.MoviesService.getFilmWithCharacters(id);
  }
}