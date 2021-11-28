import { gql } from '@apollo/client';

export const fetchMoviesQuery = gql`
query FetchMovies($pagination: PaginationInput) {
  fetchMovies(pagination: $pagination) {
    total,
    pagination {
      next {
        page,
        per_page
      },
      prev {
        page,
        per_page
      }
    }
    movies {
      title,
      poster,
      year,
      released,
      genre,
      rated,
      imdbRating,
      plot
    }
  }
}`;