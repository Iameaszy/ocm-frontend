import client from '../../../apollo-client';
import { fetchMoviesQuery } from '../queries/fetchMovies';

export const fetchMovies = async ({page, limit}: {page:number, limit: number}) => {
  const { data, error, loading } = await client.query({
    query: fetchMoviesQuery,
    variables: {pagination: {page, limit}}
  });
  
  return {
    ...data.fetchMovies,
    error,
    loading
  }
};
