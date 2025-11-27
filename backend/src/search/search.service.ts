import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SearchService {
  private readonly baseUrl = "https://www.swapi.tech/api";

  async search(type: 'people' | 'movie', query: string) {
    if (!query) {
      throw new BadRequestException("Query text is required");
    }

    const endpoint = type === 'people' ? `${this.baseUrl}/people?name=${query}` : `${this.baseUrl}/films?title=${query}`;

    const response = await axios.get(endpoint);

    return response.data;
  }
}