import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Movie } from '../../types/movie.type';
import { useEffect, useState } from 'react';
import { MovieCard } from '../../components/Card';
import { MovieProps } from './types';
import { fetchMovies } from './helpers/fetchMovies';
import { useTheme } from '@material-ui/core/styles';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export default  function MoviePage(gqlData:MovieProps) {
  const [data, setData] = useState<MovieProps>(gqlData);
  const {loading, error, movies, pagination = {}} = data;
  const theme = useTheme();
  const {palette: {mode}} = theme;

  const useStyles = makeStyles({
    root: {
      background: mode === "dark" ? grey[900] : grey[50],
      color: mode === "dark" ? grey[50] : grey[900]
    },
  })
  const classes = useStyles();
  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
  <>
    <Grid className={classes.root} container spacing={5}>
      {movies && movies.map((movie: Movie) => 
      <Grid key={movie.title} item xs={12} md={4}>
          <MovieCard movie={movie} />
      </Grid>)}
    </Grid>
    <Grid container justifyContent="center" direction="row" padding="20px">
      <Box>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button
            disabled={!pagination?.next}
            onClick={async () => {
              const data = await fetchMovies({page: pagination.next.page, limit: pagination.next.per_page});

              setData(data);
            }}
          >
            Next
          </Button>

          <Button
          disabled={!pagination?.prev}
            onClick={async () => {
              const data = await fetchMovies({page: pagination?.prev?.page, limit: pagination?.prev?.per_page});

              setData(data);
            }}
          >
            Prev
          </Button>
        </ButtonGroup>
      </Box>
    </Grid>
    
  </>)
}