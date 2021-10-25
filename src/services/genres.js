import { TMDB_API as api } from './apiConfig';

export const getAllGenres = async () => {
  try {
    const { data } = await api.get(
      `/genre/movie/list?language=en-US&api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
