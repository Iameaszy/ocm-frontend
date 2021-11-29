import MoviePage from '../screens/Movies';
import { MovieProps } from '../screens/Movies/types';
import { fetchMovies } from '../screens/Movies/helpers/fetchMovies';




const Home = (prop: MovieProps) => {
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
