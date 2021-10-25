import {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useRef,
} from 'react';

// utils / services
import { getRowMovies } from '@/services/movies';
import { getAllGenres } from '@/services/genres';
import { movieRows } from '@/utils/movieRequests';

// reducer
import { movieReducer } from '@/reducers/moviesReducer/movieReducer';
import {
  FETCH_GENRES,
  FETCH_MOVIES,
} from '@/reducers/moviesReducer/movieReducerTypes';
import { ProfilesStateContext } from '../profiles/profilesContext';

export const MoviesStateContext = createContext();
export const MoviesDispatchContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const initialMoviesState = {
    allMovies: [],
    allGenres: [],
    moviesAreLoading: true,
    genresAreLoading: true,
    moviesPaintedOnVirtualDOM: false,
  };

  const isMounted = useRef(true);
  const [state, dispatch] = useReducer(movieReducer, initialMoviesState);
  const { currentProfile } = useContext(ProfilesStateContext);

  useEffect(() => {
    const fetchGenres = async () => {
      const { genres } = await getAllGenres();
      dispatch({
        type: FETCH_GENRES,
        payload: genres,
      });
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    isMounted.current = true;
    const allMovies = [];
    const rows = {};

    const getMovies = async () => {
      if (!isMounted.current) return;
      for (const { title, fetchUrl } of movieRows) {
        const rowMovies = await getRowMovies(fetchUrl, currentProfile?.isKid);
        allMovies.push(...rowMovies);
        rows[title] = rowMovies.filter(({ backdrop_path }) =>
          Boolean(backdrop_path)
        );
      }

      dispatch({
        type: FETCH_MOVIES,
        payload: {
          allMovies,
          rows,
        },
      });
    };

    getMovies();

    return () => {
      isMounted.current = false;
    };
  }, [movieRows, currentProfile]);

  return (
    <MoviesStateContext.Provider value={state}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesStateContext.Provider>
  );
};

export default MoviesContextProvider;
