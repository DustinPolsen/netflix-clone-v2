import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
} from 'react';
import useBoundingBox from '@/hooks/useBoundingBox'; // hook to help get dimensions of elements with react (listens on resize too)
import { MOVIES_PAINTED } from '@/reducers/moviesReducer/movieReducerTypes';
import { MoviesDispatchContext } from '@/context/movies/moviesContext';
import { useRefWithLabel, useStateWithLabel } from './useStateWithLabel';
import { useWindowDimensions } from './useWindowDimensions';

const initialState = {
  movies: [],
  moviesUpdated: false,
  unclonedMoviesCount: 0,
};

function movieRowReducer(state, action) {
  switch (action.type) {
    case 'MULTIPLE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default function useMovieRow(initialMovies, rowIndex) {
  const dispatchMovies = useContext(MoviesDispatchContext);

  const [rowState, dispatchRowState] = useReducer(
    movieRowReducer,
    initialState
  );
  const { movies, moviesUpdated, unclonedMoviesCount } = rowState;

  const [activeIndicatorNumber, rawSetActiveIndicatorNumber] =
    useStateWithLabel(0, 'activeIndicatorNumber'); // the current active indicator index
  const setActiveIndicatorNumber = (...args) => {
    //  a timeout to wait for the animation to end before changing the active indicator number.
    setTimeout(() => rawSetActiveIndicatorNumber(...args), transitionTime);
  };
  const [maxScrollPosition, setMaxScrollPosition] = useStateWithLabel(
    0,
    'maxScrollPosition'
  ); // the max indicator amount
  const [canScrollPrev, setCanScrollPrev] = useStateWithLabel(
    false,
    'canScrollPrev'
  ); // a boolean for if a user can click back.

  const [translateXValue, setTranslateXValue] = useStateWithLabel(
    0,
    'translateXValue'
  ); // state for translateX css property

  const [skipTransition, setSkipTransition] = useStateWithLabel(
    false,
    'skipTransition'
  ); // a boolean for when to have transition css set to null (to fix snappy transition on certain condition)
  const timeoutInProgress = useRefWithLabel(false, 'timeoutInProgress'); // a boolean for if timeout is im progress, used to stop user from spam clicking next or back in certain conditions

  const [rowRef, rowDimensions] = useBoundingBox(); // reference for the row parent container.
  const [postersRef, posterDimensions] = useBoundingBox('.row__poster');
  const [nextButtonRef, sliderButtonDimensions] = useBoundingBox(); // reference for the next button.
  const { width } = useWindowDimensions();

  const transitionTime = width >= 1500 ? 150 : 750;

  const posterWidth = posterDimensions?.width ?? 0;

  const [containerWidth, setContainerWidth] = useStateWithLabel(
    () => initialMovies.length * posterWidth,
    'containerWidth'
  ); // the width for .row__posters

  const sliderButtonWidth = sliderButtonDimensions?.width ?? 0;

  const visiblePosterCount = Math.round(
    (rowDimensions?.width - 2 * sliderButtonWidth) / posterWidth
  );

  const indicators = maxScrollPosition
    ? [...new Array(maxScrollPosition).keys()]
    : maxScrollPosition > 0
    ? [...new Array(maxScrollPosition).keys()]
    : [];

  useEffect(() => {
    dispatchRowState({
      type: 'MULTIPLE',
      payload: {
        unclonedMoviesCount: initialMovies.length,
        movies: initialMovies,
      },
    });

    setTranslateXValue(-visiblePosterCount * posterWidth);
  }, []);

  // eslint-disable-next-line
  useLayoutEffect(() => {
    const previousMoviesState = [...initialMovies];
    const newMoviesState = [...initialMovies];

    //  add new cloned movies to end of array
    for (let i = 0; i < visiblePosterCount; i++) {
      newMoviesState.push(previousMoviesState[i]);
    }

    // add new cloned movies to beginning of array
    for (
      let i = previousMoviesState.length - 1;
      i > previousMoviesState.length - 1 - visiblePosterCount;
      i--
    ) {
      newMoviesState.unshift(previousMoviesState[i]);
    }

    setContainerWidth(newMoviesState.length * posterWidth);

    dispatchRowState({
      type: 'MULTIPLE',
      payload: {
        movies: newMoviesState,
        moviesUpdated: rowIndex,
      },
    });
  }, [visiblePosterCount, unclonedMoviesCount]);

  useEffect(() => {
    // fake loading to not let the user see the akwardness of cloning the elements.
    if (rowIndex === 7 && moviesUpdated === 7) {
      setTimeout(() => {
        dispatchMovies({ type: MOVIES_PAINTED, payload: true });
      }, 500);
    }

    // eslint-disable-next-line
  }, [moviesUpdated]);

  useEffect(() => {
    if (skipTransition) {
      setTimeout(() => {
        setSkipTransition(false);
      }, 10);
    }
  }, [skipTransition]);

  // change these when user resizes
  useEffect(() => {
    const initialTranslateXValue = -posterWidth * visiblePosterCount;

    setTranslateXValue((prevState) => {
      // this is so when user resizes but on different indicator number, reset to 0, reset translateX to initial.
      // maybe there's a more elegant solution to keep it where it is without losing indicator number
      if (prevState === initialTranslateXValue) return prevState;
      return initialTranslateXValue;
    });
    setActiveIndicatorNumber(0);
  }, [posterWidth, visiblePosterCount]);

  useEffect(() => {
    if (moviesUpdated === rowIndex) {
      setContainerWidth(movies.length * posterWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesUpdated, posterWidth]);

  useEffect(() => {
    const maxScrollPos = Math.floor(unclonedMoviesCount / visiblePosterCount);
    setMaxScrollPosition(Number(maxScrollPos));
  }, [posterWidth, unclonedMoviesCount, visiblePosterCount]);

  // onNavigate, function runs when user clicks slider next or prev button
  const onNavigate = useCallback(
    (direction) => {
      if (timeoutInProgress.current) return;

      const initialTranslateXValue = -posterWidth * visiblePosterCount;
      const lastAllowedUnclonedPoster = unclonedMoviesCount * -posterWidth;
      // const lastAllowedPoster = lastAllowedUnclonedPoster + initialTranslateXValue;

      setCanScrollPrev(rowIndex); // makes us able to scroll left after scrolling forward for the first time (just like netflix)

      if (direction === 'forward') {
        // for going forward
        const translateXNext =
          translateXValue - posterWidth * visiblePosterCount; // newState = prevState - posterWidth * visiblePosterCount

        const isOnEdgeForward = translateXNext < lastAllowedUnclonedPoster;

        if (isOnEdgeForward) {
          timeoutInProgress.current = true;

          setActiveIndicatorNumber(0);

          setTranslateXValue(translateXNext);

          setTimeout(() => {
            setSkipTransition(true);
            setTranslateXValue(initialTranslateXValue);
            timeoutInProgress.current = false;
          }, transitionTime); // the timeout that once ends will go back to initial translateX value, can be snappy and ugly if doesn't work
        } else {
          // if is not at edge
          setActiveIndicatorNumber((prev) => (prev += 1));

          setTranslateXValue(translateXNext);
        }
      } else {
        //  if clicking back
        const translateXBack =
          translateXValue + posterWidth * visiblePosterCount; // newState = prevState + posterWidth * visiblePosterCount

        const isOnEdgeBack = translateXBack > initialTranslateXValue;
        if (isOnEdgeBack) {
          timeoutInProgress.current = true;

          setActiveIndicatorNumber(indicators.length - 1);

          setTimeout(() => {
            setSkipTransition(true);
            setTranslateXValue(lastAllowedUnclonedPoster);
            timeoutInProgress.current = false;
          }, transitionTime);

          setTranslateXValue(translateXBack);
        } else {
          // if is not at edge
          setActiveIndicatorNumber((prev) => (prev -= 1));

          setTranslateXValue(translateXBack);
        }
      }
    },
    [
      indicators,
      translateXValue,
      posterWidth,
      visiblePosterCount,
      unclonedMoviesCount,
    ]
  );

  return {
    indicators,
    visiblePosterCount,
    sliderButtonWidth,
    posterWidth,
    rowRef,
    postersRef,
    nextButtonRef,
    containerWidth,
    canScrollPrev,
    activeIndicatorNumber,
    unclonedMoviesCount,
    moviesUpdated,
    movies,
    onNavigate,
    translateXValue,
    timeoutInProgress,
    skipTransition,
    transitionTime,
  };
}
