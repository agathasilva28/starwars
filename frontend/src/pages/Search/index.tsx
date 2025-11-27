import { useState } from 'react'
import SearchForm from './SearchForm';
import type { MoviesResponse } from '../../types/movie';
import type { PeopleResponse } from '../../types/people';
import List from './List';

type ListType = {
  type: string;
  items: PeopleResponse | MoviesResponse;
}

function Search() {
  const [list, setList] = useState<ListType>({ type: 'people', items: [] });
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <SearchForm setList={setList} setLoading={setLoading} />
      <List list={list} isLoading={loading} />
    </>
  )
}

export default Search
