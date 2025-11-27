import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoviesService {
  private readonly BASE_URL = 'https://www.swapi.tech/api';

  async getFilmWithCharacters(id: string) {
    const filmRes = await axios
      .get(`${this.BASE_URL}/films/${id}`)
      .then(r => r.data.result)
      .catch(() => {
        throw new HttpException('Film not found', 404);
      });

    const characterUrls: string[] = filmRes.properties.characters;
    const peopleResults = await Promise.all(
      characterUrls.map(async (url) => {
        const person = await axios.get(url).then(r => r.data.result);
        return {
          id: person.uid,
          name: person.properties.name,
        };
      })
    );

    return {
      ...filmRes,
      properties: {
        ...filmRes.properties,
        characters: peopleResults,
      },
    };
  }
}