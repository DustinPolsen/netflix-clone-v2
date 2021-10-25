import { MOVIE_REQUESTS as REQUESTS } from '../utils/movieRequests';
import { TMDB_API as api } from './apiConfig';

export const getRowMovies = async (fetchUrl, isUserAKid = false) => {
  try {
    const { data } = await api.get(`${fetchUrl}&include_adult=${isUserAKid}`);
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getSearchedMovies = async (search, isUserAKid = false) => {
  // if user/selected profile is a kid then adult movies won't be included "&include_adult={isUserAKid ? false : true}"

  const searchUrl = `/search/movie?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }&language=en-US&page=1&include_adult=${isUserAKid}
    &query=${search}`;

  const { data } = await api.get(searchUrl);

  return data.results;
};

export const getOneRandomMovie = async () => {
  try {
    const {
      data: { results },
    } = await api.get(REQUESTS.FETCH_NETFLIX_ORIGINALS);
    return results[Math.floor(Math.random() * results.length)]; // get a random number starting from 0 and less than 1, multiply it by the count of results, Math.floor() function returns the largest integer less than or equal to a given number.
  } catch (error) {
    throw error;
  }
};

export const getYoutubeVideo = async (mediaType, id) => {
  try {
    if (mediaType) {
      const { data } = await api.get(
        `/${mediaType}/${id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&append_to_response=videos`
      );
      return data?.videos?.results[0]?.key;
    }
  } catch (error) {
    throw error;
  }
};

export const getCastByMovieId = async (movieId) => {
  try {
    const resp = await api.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=en-US`
    );
    return resp.data.cast;
  } catch (error) {
    throw error;
  }
};

export const getMoviesByGenreId = async (genreId, isUserAKid) => {
  try {
    const { data } = await api.get(
      // TODO: terenary for user age in include adult.
      `/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=${!isUserAKid}&include_video=true&page=1&with_genres=${genreId}`
    );
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getMoviesByPersonId = async (personId, isUserAKid) => {
  try {
    const { data } = await api.get(
      // TODO: terenary for user age in include adult.
      `/discover/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=${!isUserAKid}&include_video=true&page=1&with_people=${personId}`
    );
    return data.results;
  } catch (error) {
    throw error;
  }
};
