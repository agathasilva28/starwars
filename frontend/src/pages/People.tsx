import Box from "../components/Box";
import { useTheme } from "styled-components";
import { Typography } from "../components/Typograph";
import { usePerson } from "../hooks/usePerson";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Message from "../components/Message";

export default function People () {
  const theme = useTheme()
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if(!id) return null;
  
  const { data, isLoading } = usePerson(id);

  return (
    <Box width={theme.containers.single}>
      {isLoading ? <Message>Loading...</Message> : 
      <>
        <Typography variant="title" style={{marginBottom: theme.spacing.md}}>{ data?.properties.name}</Typography>

        <div style={{display: 'flex', gap: theme.spacing.xl, marginBottom: theme.spacing.lg}}>
          <div style={{flex: 1}}>
            <Typography variant="subtitle" style={{marginBottom: theme.spacing.xs}}>Details</Typography>
            <hr style={{marginBottom: theme.spacing.xxs}} />
            <Typography>
              Birth Year: {data?.properties.birth_year}
            </Typography>
            <Typography>
              Gender: {data?.properties.gender}
            </Typography>
            <Typography>
              Eye Color: {data?.properties.eye_color}
            </Typography>
            <Typography>
              Hair Color: {data?.properties.hair_color}
            </Typography>
            <Typography>
              Height: {data?.properties.height}
            </Typography>
            <Typography>
              Mass: {data?.properties.mass}
            </Typography>
          </div>
          <div style={{flex: 1}}>
            <Typography variant="subtitle" style={{marginBottom: theme.spacing.xs}}>Movies</Typography>
            <hr style={{marginBottom: theme.spacing.xxs}} />

            {data?.properties.films.map((movie, index) => (
              <>
                {
                  index && <span>, </span>
                }
                <Link to={`/movie/${movie.id}`}>
                  {movie.title}
                </Link>
              </>
            ))}
          </div>
        </div>

        <Button onClick={() => navigate(-1)}>BACK TO SEARCH</Button>
      </>
      }
    </Box>
  )
}