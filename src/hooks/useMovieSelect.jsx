import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getYoutubeVideo } from '../services/movies';

const getType = (movie) => {
  if (movie?.media_type) {
    return movie.media_type;
  } else if (movie?.first_air_date) {
    return 'tv';
  } else {
    return 'movie';
  }
};

export const useMovieSelect = () => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  const canRedirect = useRef(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (trailerUrl && selectedMovie && canRedirect.current) {
      // navigate to MoviePlayBackView.jsx if playMovie ran.
      navigate(`/watch/${selectedMovie.id}/${trailerUrl}`, {
        state: {
          movie: selectedMovie,
          trailerUrl: trailerUrl,
        },
      });
    }
  }, [trailerUrl, selectedMovie, navigate]);

  const onSelectMovie = useCallback(async (movie) => {
    const mediaType = await getType(movie);
    setSelectedMovie(movie);
    const fetchedUrl = await getYoutubeVideo(mediaType, movie?.id);
    setTrailerUrl(fetchedUrl);
  }, []);

  const playMovie = async (movie) => {
    onSelectMovie(movie);
    canRedirect.current = true;
  };

  return {
    selectedMovie,
    setSelectedMovie,
    trailerUrl,
    setTrailerUrl,
    onSelectMovie,
    playMovie,
    canRedirect,
  };
};
