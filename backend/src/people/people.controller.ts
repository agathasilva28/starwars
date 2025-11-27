import { Controller, Get, Param } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly PeopleService: PeopleService) {}

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.PeopleService.getPersonWithFilms(id);
  }
}