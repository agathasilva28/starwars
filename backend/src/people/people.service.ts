import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PeopleService {
  private BASE_URL = 'https://www.swapi.tech/api';

  async getPersonWithFilms(id: string) {
    const personRes = await axios
      .get(`${this.BASE_URL}/people/${id}`)
      .then(res => res.data.result);

    const filmUrls: string[] = personRes.properties.films;

    const films = await Promise.all(
      filmUrls.map(async (url) => {
        const film = await axios.get(url).then(r => r.data.result);

        return {
          id: film.uid,
          title: film.properties.title,
        };
      })
    );

    return {
      ...personRes,
      properties: {
        ...personRes.properties,
        films,
      },
    };
  }
}