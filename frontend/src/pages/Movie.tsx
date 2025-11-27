import Box from "../components/Box";
import { useTheme } from "styled-components";
import { Typography } from "../components/Typograph";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useMovie } from "../hooks/useMovie";
import Message from "../components/Message";

function OpeningCrawlText({text}: {text: string}) {
  const paragraphs = text.split('\r\n');
  console.log(paragraphs)
  return paragraphs.map(text => <p>{text || ' '}</p>);
}

export default function Movie () {
  const theme = useTheme()
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if(!id) return null;
  
  const { data, isLoading } = useMovie(id);

  console.log(data)

  return (
    <Box width={theme.containers.single}>
      {isLoading ? 
        <Message>Loading...</Message> : 
        <>
          <Typography variant="title" style={{marginBottom: theme.spacing.md}}>{ data?.properties.title}</Typography>

          <div style={{display: 'flex', gap: theme.spacing.xl, marginBottom: theme.spacing.lg}}>
            <div style={{flex: 1}}>
              <Typography variant="subtitle" style={{marginBottom: theme.spacing.xs}}>Opening Crawl</Typography>
              <hr style={{marginBottom: theme.spacing.xxs}} />
              <Typography>
                <OpeningCrawlText text={data?.properties.opening_crawl ?? ""} />
              </Typography>
            </div>
            <div style={{flex: 1}}>
              <Typography variant="subtitle" style={{marginBottom: theme.spacing.xs}}>Characters</Typography>
              <hr style={{marginBottom: theme.spacing.xxs}} />

              {data?.properties.characters.map((person, index) => (
                <>
                  {
                    index && <span>, </span>
                  }
                  <Link to={`/person/${person.id}`}>
                    {person.name}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </>
      }

      <Button onClick={() => navigate(-1)}>BACK TO SEARCH</Button>
    </Box>
  )
}