import { useContext, useEffect, useRef } from 'react';

// components
import { Typography } from '@material-ui/core';
import MovieCard from '../../../components/MovieComponents/MovieCard/MovieCard';
import Layout from '../../../components/shared/Layout/Layout';
import { InnerColumn } from '../../../components/shared/styled-components/InnerColumn';

// context
import { ProfilesStateContext } from '../../../context/profiles/profilesContext';
import { SearchContext } from '../../../context/search/searchContext';
// utils
import { baseImgUrl } from '../../../utils/generalUtils';

export default function MyList() {
  const { currentProfile } = useContext(ProfilesStateContext);
  const { setBrowseName } = useContext(SearchContext);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      setBrowseName('My List');
    }

    return () => {
      isMounted.current = false;
    };
  }, [setBrowseName]);

  let movies = [...new Set(currentProfile.list)];

  return (
    <Layout>
      <InnerColumn>
        {movies.length ? (
          <ul className="movie__list">
            {movies.map((movie) => (
              <MovieCard
                movie={movie}
                src={`${baseImgUrl}${movie.backdrop_path}`}
                alt={movie.name}
                key={movie.id}
                className="searchResults__searchedMovie"
              />
            ))}
          </ul>
        ) : (
          <Typography align="center" variant="h5">
            No movies added to your list at this time
          </Typography>
        )}
      </InnerColumn>
    </Layout>
  );
}
