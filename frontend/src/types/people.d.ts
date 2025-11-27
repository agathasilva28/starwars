interface film {
  id: string;
  title: string;
}

export interface PersonProperties {
  created: string;
  edited: string;
  name: string;
  gender: string;
  skin_color: string;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  homeworld: string;
  birth_year: string;
  vehicles: string[];
  starships: string[];
  films: film[];
  url: string;
}

export interface Person {
  properties: PersonProperties;
  uid: string;
  description: string;
}

export type PeopleResponse = Person[];