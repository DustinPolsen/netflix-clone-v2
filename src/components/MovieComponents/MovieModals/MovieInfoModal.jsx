// core-components/hooks
import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { useMovieSelect } from '../../../hooks/useMovieSelect';

// components
import Dialog from '@material-ui/core/Dialog';
import YouTube from 'react-youtube';

// icons
import CloseIcon from '@material-ui/icons/Close';
import ShowLessIcon from '@material-ui/icons/ExpandLess';
import ShowMoreIcon from '@material-ui/icons/ExpandMore';

// services and utils
import { Link } from 'react-router-dom';
import { truncate } from '../../../utils/truncate';
import { baseImgUrl, COLORS } from '../../../utils/generalUtils';
import { getCastByMovieId, getMoviesByGenreId } from '../../../services/movies';
import { getReleaseYear } from '../../../utils/getReleaseYear';

// styles
import {
  StyledGrid,
  StyledBox,
  StyledDialogContent,
  StyledVideo,
} from './MovieInfoModal.styles.js';

// Context
import { MoviesStateContext } from '../../../context/movies/moviesContext';
import { CircularProgressLoading } from '../../shared/Loading/CircularProgressLoading';
import { SearchContext } from '../../../context/search/searchContext';
import {
  AddToListButtonVariationOne as AddToListBtn,
  RemoveFromListButton as RemoveFromListBtn,
} from '../../shared/AddToListButton/AddToListButton';
import {
  ProfilesDispatchContext,
  ProfilesStateContext,
} from '../../../context/profiles/profilesContext';
import { UPDATE_PROFILE } from '../../../reducers/ProfilesReducer/profilesReducerTypes';

export default function MovieInfoModal({ movieToPlay, open, setOpen }) {
  const {
    onSelectMovie,
    trailerUrl,
    playMovie,
    setTrailerUrl,
    setSelectedMovie,
  } = useMovieSelect();
  const { allGenres } = useContext(MoviesStateContext);
  const { setSearch } = useContext(SearchContext);
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [showMoreRecommendedMovies, setShowMoreRecommendedMovies] =
    useState(false);
  const [isMovieLoaded, setIsMovieLoaded] = useState(false);

  const { currentProfile } = useContext(ProfilesStateContext);

  const dispatch = useContext(ProfilesDispatchContext);

  const isMounted = useRef(true);

  useEffect(() => {
    const loadMovie = async () => {
      if (isMounted.current) {
        if (open) {
          onSelectMovie(movieToPlay);

          setTimeout(() => {
            setIsMovieLoaded(true);
          }, 1200);

          return () => {
            isMounted.current = false;
          };
        }
      }
    };
    loadMovie();
  }, [movieToPlay, onSelectMovie, open]);

  useEffect(() => {
    const getData = async () => {
      if (!open) return;
      if (!movieToPlay) return;

      if (allGenres?.length) {
        for (let i = 0; i < allGenres.length; i++) {
          let foundGenre = allGenres.find(
            (g) => g.id === Number(movieToPlay.genre_ids[i])
          );
          if (foundGenre) {
            setGenres((prevState) => [...prevState, foundGenre]);
          }
        }
      }

      const castData = await getCastByMovieId(movieToPlay.id);
      setCast(castData);

      const recommendedData = await getMoviesByGenreId(
        movieToPlay.genre_ids[0]
      );

      const newRecommendedMovies = recommendedData.filter(
        ({ backdrop_path, overview }) => Boolean(backdrop_path && overview)
      );

      setRecommendedMovies(newRecommendedMovies);
    };

    getData();

    // eslint-disable-next-line
  }, [open]);

  const VIDEO_PLAYER_OPTIONS = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onRedirect = async () => {
    setSearch('');
    handleClose();
  };

  const redirectToClickedMovie = async (movie) => {
    setSelectedMovie('');
    setTrailerUrl('');
    return playMovie(movie);
  };

  const onAddToList = async (movieToAdd) => {
    if (currentProfile?.list?.find((movie) => movie.id === movieToAdd.id)) {
      return;
    }
    const updatedProfile = {
      ...currentProfile,
      list: [...currentProfile.list, movieToAdd],
    };
    dispatch({ type: UPDATE_PROFILE, payload: updatedProfile });
  };

  const onRemoveFromList = async (movieToRemove) => {
    const updatedProfile = {
      ...currentProfile,
      list: currentProfile.list.filter(
        (movie) => movie.id !== movieToRemove.id
      ),
    };

    dispatch({ type: UPDATE_PROFILE, payload: updatedProfile });
  };

  const sectionDividerJSX = (state, setState) => (
    <div className={`modal__sectionDivider ${!state && 'collapsed'}`}>
      <button
        className="modal__sectionDivider--expandButton"
        onClick={() => setState((curr) => !curr)}
      >
        {state ? (
          <ShowLessIcon className="modal__expandIcon" />
        ) : (
          <ShowMoreIcon className="modal__expandIcon" />
        )}
      </button>
    </div>
  );

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      aria-labelledby={movieToPlay?.title}
      open={open}
      maxWidth="md"
      scroll="body"
      id={movieToPlay?.id}
      PaperProps={{
        style: {
          backgroundColor: COLORS.VERY_BRIGHT_BLACK,
          boxShadow: 'none',
        },
      }}
    >
      <StyledBox onClick={handleClose}>
        <CloseIcon fontSize="large" />
      </StyledBox>

      <StyledVideo>
        {isMovieLoaded ? (
          <YouTube
            videoId={trailerUrl}
            opts={VIDEO_PLAYER_OPTIONS}
            className="modal__videoPlayer"
          />
        ) : (
          <div className="modal__loading--container">
            <CircularProgressLoading thickness={1} marginTop="6em" size={150} />
          </div>
        )}
      </StyledVideo>

      <br />

      <StyledDialogContent>
        <div className="modal__container">
          <div className="modal__details--metaData">
            <div className="metaData__left">
              <div className="metaData__left--infoWrapper">
                <div className="metaData__firstLine">
                  <div className="movie__scoreContainer">
                    <span className="movie__score">
                      {Math.round(movieToPlay?.vote_average * 10)}% match
                    </span>
                  </div>
                </div>
                <div className="metaData__secondLine">
                  <div className="movie__year">
                    {getReleaseYear(movieToPlay)}
                  </div>
                </div>
              </div>
            </div>
            <div className="metaData__right">
              <div className="metaData__right--tags cast">
                {cast.length ? (
                  <>
                    <span>Cast:&nbsp;</span>
                    {cast.map((person, idx) => (
                      <Fragment key={person.id}>
                        <Link
                          key={person.id}
                          to={`/browse/person/${person.id}`}
                          onClick={() => onRedirect('person', person.id)}
                        >
                          {person.name}
                          {idx !== cast.length - 1 && ','}
                        </Link>
                        &nbsp;
                      </Fragment>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>

              <div className="metaData__right--tags genres">
                {genres.length ? (
                  <>
                    <span>Genres:&nbsp;</span>
                    {[...new Set(genres)].map(
                      (genre, idx) =>
                        genre && (
                          <Fragment key={genre.id}>
                            <Link
                              to={`/browse/genre/${genre.id}`}
                              onClick={() => onRedirect('genre', genre.id)}
                            >
                              {genre.name}
                              {/* don't show "," if it's the last genre in the list */}
                              {idx !== [...new Set(genres)].length - 1 && ','}
                            </Link>
                            &nbsp;
                          </Fragment>
                        )
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <StyledGrid
            aria-label="recommended movies"
            showMoreRecommendedMovies={showMoreRecommendedMovies}
          >
            {recommendedMovies.length ? (
              <>
                <h2>More Like This</h2>
                <ul>
                  {recommendedMovies.map((recommendedMovie) => (
                    <li
                      className="modal__recommendedMovie"
                      key={recommendedMovie.id}
                    >
                      <picture
                        onClick={() => redirectToClickedMovie(recommendedMovie)}
                      >
                        <img
                          src={`${baseImgUrl}${recommendedMovie.backdrop_path}`}
                          alt={recommendedMovie.name}
                        />
                      </picture>
                      <div className="modal__recommendedMovie--metaData">
                        <div className="recommendedMovie__MetaData--firstLine">
                          <h4
                            onClick={() =>
                              redirectToClickedMovie(recommendedMovie)
                            }
                          >
                            {getReleaseYear(recommendedMovie)}
                          </h4>
                          {currentProfile?.list?.find(
                            (movie) => movie.id === recommendedMovie.id
                          ) ? (
                            <RemoveFromListBtn
                              tooltip
                              onClick={() => onRemoveFromList(recommendedMovie)}
                            />
                          ) : (
                            <AddToListBtn
                              tooltip
                              onClick={() => onAddToList(recommendedMovie)}
                            />
                          )}
                        </div>
                        <p
                          onClick={() =>
                            redirectToClickedMovie(recommendedMovie)
                          }
                        >
                          {truncate(recommendedMovie.overview, 200)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                {sectionDividerJSX(
                  showMoreRecommendedMovies,
                  setShowMoreRecommendedMovies
                )}
              </>
            ) : (
              <div style={{ minHeight: '20em' }}>
                <br />
              </div>
            )}
          </StyledGrid>

          <br />
        </div>
      </StyledDialogContent>
    </Dialog>
  );
}
