import { useTheme } from 'styled-components';
import Box from '../../components/Box'
import type { MoviesResponse } from '../../types/movie';
import type { PeopleResponse } from '../../types/people';
import Message from '../../components/Message';
import { Typography } from '../../components/Typograph';
import ItemsList from './ItemsList';

type ListType = {
  type: string;
  items: PeopleResponse | MoviesResponse;
}

type ListProps = {
  list: ListType;
  isLoading?: boolean;
};


function List({ list, isLoading }: ListProps) {
  const theme = useTheme()

  return (
    <Box width={theme.containers.right} style={{ height: theme.containers.right }}>
      <Typography variant="title" style={{ marginBottom: theme.spacing.sm }}>
        Results
      </Typography>
      <hr />

      {isLoading ? (
        <Message>Loading...</Message>
      ) : !list.items.length ? (
        <Message>There are zero matches. <br /> Use the form to search for People or Movies.</Message>
      ) : (
        <ItemsList list={list} />
      )}
    </Box>
  )
}

export default List
