import { memo, useState } from 'react';
import MovieInfoModal from '../MovieModals/MovieInfoModal';

const MovieCard = ({ src, alt, className, movie, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="movie__card--parent"
        onClick={() => setIsModalOpen(movie?.id)}
      >
        <img
          src={src}
          alt={alt}
          aria-label={`card ${index + 1} displaying: ${movie?.name}`}
          className={className ?? 'movie-card'}
        />
      </div>

      <MovieInfoModal
        open={isModalOpen === movie?.id}
        setOpen={setIsModalOpen}
        movieToPlay={movie}
      />
    </>
  );
};

export default memo(MovieCard);
