import { useEffect, useState } from 'react';
import Box from '../../components/Box'
import { Typography } from '../../components/Typograph'
import styled, { useTheme } from 'styled-components'
import Button from '../../components/Button';
import type { MoviesResponse } from '../../types/movie';
import type { PeopleResponse } from '../../types/people';
import { useSearch } from '../../hooks/useSearch';

type ListType = {
  type: string;
  items: PeopleResponse | MoviesResponse;
}

type BoxProps = {
  setList: React.Dispatch<React.SetStateAction<ListType>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const StyledInput = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.input.height};
  font-size: ${({ theme }) => theme.fonts.sizes.label};
  border: solid 1px ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

function SearchForm({ setList, setLoading }: BoxProps) {
  const [searchType, setSearchType] = useState<'people' | 'movie'>('people')
  const [searchText, setSearchText] = useState<string>('')
  const theme = useTheme()
  const { isLoading, refetch } = useSearch(searchType, searchText);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  const inputPlaceholder = searchType === 'people'
    ? 'e.g. Chewbacca, Yoda, Boba Fett'
    : 'e.g. Star Wars, The Empire Strikes Back, Return of the Jedi'

  const handleSearch = async () => {
    const result = await refetch();
    const responseData = result.data as { result?: PeopleResponse | MoviesResponse };

    setList({ type: searchType, items: responseData.result || [] });
  }

  return (
    <Box width={theme.containers.left}>
      <Typography variant='label' style={{ fontWeight: theme.fonts.weights.medium, marginBottom: theme.spacing.sm }}>
        What are you searching for?
      </Typography>

      <div style={{ marginBottom: theme.spacing.sm}}>
        <label style={{ marginRight: theme.spacing.md}}>
          <input type="radio" name="searchType" checked={searchType === 'people'} onClick={() => setSearchType('people')} style={{ marginRight: theme.spacing.xs, verticalAlign: 'middle'}} />
          <Typography variant='label' style={{ display: 'inline', verticalAlign: 'middle'}}>People</Typography>
        </label>
        <label>
          <input type="radio" name="searchType" checked={searchType === 'movie'} onClick={() => setSearchType('movie')} style={{ marginRight: theme.spacing.xs, verticalAlign: 'middle'}} />
          <Typography variant='label' style={{ display: 'inline', verticalAlign: 'middle'}}>Movie</Typography>
        </label>
      </div>

      <StyledInput autoFocus type="text" placeholder={ inputPlaceholder } value={searchText} onChange={(e) => setSearchText(e.target.value)} />

      <Button onClick={handleSearch} style={{ width: '100%' }}>
        Search
      </Button>
    </Box>
  )
}

export default SearchForm
