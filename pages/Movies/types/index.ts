import { ReactNode } from 'react';
import { Movie } from '../../../types/movie.type';

export type MovieProps  = {movies: Movie[], pagination: any, children?: ReactNode, loading: boolean, error: any, total: number}