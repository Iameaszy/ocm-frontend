import type { NextPage } from 'next'
import MoviePage from './Movies';
import { MovieProps } from './Movies/types';
import { fetchMovies } from './Movies/helpers/fetchMovies';




const Home: NextPage = (prop: MovieProps) => {
  return (<>
    <MoviePage {...prop} />
  </>)
}

export async function getServerSideProps() {
  const {error,...data} = await fetchMovies({page: 1, limit: 6})
  return {
    props: {...data, error: error || null}
  }
}
export default Home
