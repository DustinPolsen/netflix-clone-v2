import React from 'react';

// services and utils
import { baseImgUrl } from '../../../utils/generalUtils';

// components
import MovieCard from '../MovieCard/MovieCard';

// styles
import { StyledRow } from './Row.styles';

// icons
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import useMovieRow from '../../../hooks/useMovieRow';

const FALLBACK_POSTER_IMG =
  'https://image.tmdb.org/t/p/original/fl6S0hvaYvFeRYGniMm9KzNg3AN.jpg';

function Row({ title, initialMoviesState, isLargeRow, rowIndex }) {
  const {
    indicators,
    visiblePosterCount,
    rowRef,
    postersRef,
    nextButtonRef,
    containerWidth,
    canScrollPrev,
    activeIndicatorNumber,
    moviesUpdated,
    movies = initialMoviesState,
    onNavigate,
    translateXValue,
    timeoutInProgress,
    skipTransition,
    transitionTime,
  } = useMovieRow(initialMoviesState, rowIndex);

  const CARDS =
    movies.length > 0 ? (
      React.Children.toArray(
        movies?.map(
          (movie, idx) =>
            movie && (
              <MovieCard
                index={idx}
                movie={movie}
                src={`${baseImgUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                isLargeRow={isLargeRow}
                alt={movie.name}
                className={`row__poster ${isLargeRow && 'row__posterLarge'} ${
                  idx < visiblePosterCount ||
                  (idx > movies.length - visiblePosterCount - 1 &&
                    idx < movies.length)
                    ? 'cloned'
                    : ''
                }`}
              />
            )
        )
      )
    ) : (
      <MovieCard
        index={0}
        movie={{
          name: 'test',
          id: 0,
          genre_ids: [10749, 16, 18],
        }}
        src={FALLBACK_POSTER_IMG}
        isLargeRow={isLargeRow}
        alt={'test'}
        key={'test' + 0}
        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
      />
    );

  return (
    <StyledRow
      aria-label="movies row"
      isLargeRow={isLargeRow}
      ref={rowRef}
      containerWidth={containerWidth}
      translateXValue={translateXValue}
      skipTransition={skipTransition}
      transitionTime={transitionTime}
    >
      <div className="row__headerContainer">
        <h2 className="row__title">{title}</h2>

        {/* indicators */}
        <ul className="row__pagination">
          {indicators.map((_, idx) => (
            <li
              key={idx}
              className={`indicator${
                idx === activeIndicatorNumber ? ' active' : ''
              }`}
            />
          ))}
        </ul>
      </div>

      {/* back btn */}
      {canScrollPrev === rowIndex && (
        <button
          style={{ cursor: timeoutInProgress.current ? 'inherit' : 'pointer' }}
          disabled={timeoutInProgress.current}
          className="slider__nav prev"
          onClick={() => onNavigate('backward')}
        >
          <span className="icon">
            <ArrowBackIcon fontSize="large" />
          </span>
        </button>
      )}

      {/* movie posters */}
      <div className="row__posters" ref={postersRef}>
        {CARDS}
      </div>

      {/* next btn */}
      {moviesUpdated === rowIndex && (
        <button
          ref={nextButtonRef}
          style={{ cursor: timeoutInProgress.current ? 'inherit' : 'pointer' }}
          disabled={timeoutInProgress.current}
          className="slider__nav next"
          onClick={() => onNavigate('forward')}
        >
          <span className="icon">
            <ArrowForwardIcon fontSize="large" />
          </span>
        </button>
      )}
    </StyledRow>
  );
}

export default Row;
