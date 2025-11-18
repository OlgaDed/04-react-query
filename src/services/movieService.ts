import axios from 'axios';
import type { TMDBResponse } from '../types/movie';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<TMDBResponse> => {
  const response = await axios.get<TMDBResponse>(
    `${API_BASE_URL}/search/movie`,
    {
      params: {
        query,
        page,
        include_adult: false,
        language: 'en-US',
      },
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    }
  );

  return response.data;
};
