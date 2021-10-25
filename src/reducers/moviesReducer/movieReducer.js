import {
  FETCH_MOVIES,
  FETCH_GENRES,
  MOVIES_PAINTED,
} from './movieReducerTypes';

export const movieReducer = (state, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        allMovies: action.payload.allMovies,
        rows: action.payload.rows,
        moviesAreLoading: false,
      };

    case FETCH_GENRES:
      return {
        ...state,
        allGenres: action.payload,
        genresAreLoading: false,
      };

    case MOVIES_PAINTED:
      return {
        ...state,
        moviesPaintedOnVirtualDOM: true,
      };

    default:
      return state;
  }
};
