// hooks
import { useState, useMemo, useContext } from 'react';
import { useMovieSelect } from '../../../hooks/useMovieSelect';

// components
import MovieInfoModal from '../MovieModals/MovieInfoModal';

// services and utils
import { getOneRandomMovie } from '../../../services/movies';
import { truncate } from '../../../utils/truncate';

// icons
import PlayIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/InfoOutlined';

//styles
import { StyledBanner } from './Banner.styles';
import { SearchContext } from '../../../context/search/searchContext';

export default function Banner() {
  const [movie, setMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { browseName } = useContext(SearchContext);
  const { playMovie } = useMovieSelect();

  useMemo(async () => {
    const oneMovie = await getOneRandomMovie();
    setMovie(oneMovie);
  }, []);

  const toggleInfoOpen = () => {
    setIsModalOpen(movie.id);
  };

  return (
    !browseName && (
      <>
        <StyledBanner
          aria-label="banner"
          imgUrl={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__descriptionContainer">
              <h1 className="banner__description">
                {truncate(movie?.overview, 250)}
              </h1>
            </div>
            <div className="banner__buttons">
              <button
                className="banner__button"
                onClick={() => playMovie(movie)}
              >
                <PlayIcon fontSize="small" />
                &nbsp;
                <span>Play</span>
              </button>
              <button className="banner__button info" onClick={toggleInfoOpen}>
                <InfoIcon fontSize="small" />
                &nbsp;&nbsp;
                <span>More Info</span>
              </button>
            </div>
          </div>
          <div className="banner--fadeBottom" />
        </StyledBanner>

        <MovieInfoModal
          open={isModalOpen === movie?.id}
          setOpen={setIsModalOpen}
          movieToPlay={movie}
        />
      </>
    )
  );
}
