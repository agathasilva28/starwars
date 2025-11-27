import styled from 'styled-components';
import Button from '../../components/Button';
import { Typography } from '../../components/Typograph'
import type { MoviesResponse } from '../../types/movie';
import type { PeopleResponse } from '../../types/people';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

type ListType = {
  type: string;
  items: PeopleResponse | MoviesResponse;
}

type ItemsListProps = {
  list: ListType
}

const ListItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  border-bottom: solid 1px ${({ theme }) => theme.colors.border};
`;

function Items({ label, id, type }: { label: string, id: string, type: string }) {
  const navigate = useNavigate();
  
    return (
      <ListItems key={id}>
        <Typography variant='subtitle' style={{ marginBottom: '8px' }}>{label}</Typography>
        <Button onClick={() => navigate(`/${type}/${id}`)}>View Details</Button>
      </ListItems>
    )
}

function PeopleList({ items }: { items: PeopleResponse }) {
  return (
    <>
      {items.map((person) => (
        <Items type='person' id={person.uid} label={person.properties.name} />
      ))}
    </>
  )
}

function MovieList({ items }: { items: MoviesResponse }) {
  return (
    <>
      {items.map((movie) => (
        <Items type='movie' id={movie.uid} label={movie.properties.title} />
      ))}
    </>
  )
}


export default function ItemsList({ list }: ItemsListProps) {
  const theme = useTheme()

  return (
    <ul style={{ marginTop: theme.spacing.xs }}>
      {list.type === 'people' ? <PeopleList items={list.items as PeopleResponse} /> : <MovieList items={list.items as MoviesResponse} />}
    </ul>
  )
}