interface characters {
  id: string;
  name: string;
}

export interface MovieProperties {
  created: string;
  edited: string;
  starships: string[];
  vehicles: string[];
  planets: string[];
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  characters: characters[];
  species: string[];
  url: string;
}

export interface Movie {
  properties: MovieProperties;
  uid: string;
  description: string;
}

export type MoviesResponse = Movie[];