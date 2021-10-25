const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const MOVIE_REQUESTS = {
  FETCH_TRENDING: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  FETCH_NETFLIX_ORIGINALS: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  FETCH_TOP_RATED: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  FETCH_ACTION_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  FETCH_COMEDY_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  FETCH_HORROR_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  FETCH_ROMANCE_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  FETCH_DOCUMENTARIES: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const movieRows = [
  {
    title: 'Netflix Originals',
    fetchUrl: MOVIE_REQUESTS.FETCH_NETFLIX_ORIGINALS,
  },
  {
    title: 'Trending Now',
    fetchUrl: MOVIE_REQUESTS.FETCH_TRENDING,
  },
  {
    title: 'Top Rated',
    fetchUrl: MOVIE_REQUESTS.FETCH_TOP_RATED,
  },
  {
    title: 'Action Movies',
    fetchUrl: MOVIE_REQUESTS.FETCH_ACTION_MOVIES,
  },
  {
    title: 'Comedy Movies',
    fetchUrl: MOVIE_REQUESTS.FETCH_COMEDY_MOVIES,
  },
  {
    title: 'Horror Movies',
    fetchUrl: MOVIE_REQUESTS.FETCH_HORROR_MOVIES,
  },
  {
    title: 'Romance Movies',
    fetchUrl: MOVIE_REQUESTS.FETCH_ROMANCE_MOVIES,
  },
  {
    title: 'Documentaries',
    fetchUrl: MOVIE_REQUESTS.FETCH_DOCUMENTARIES,
  },
];
