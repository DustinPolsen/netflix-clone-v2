// services and utils
import { useContext } from 'react';
import { SearchContext } from '../../../context/search/searchContext';
import { baseImgUrl } from '../../../utils/generalUtils';

// components
import MovieCard from '../MovieCard/MovieCard';

//styles
import { InnerColumn } from './SearchResults.styles';

export default function SearchResultsView() {
  const { queriedMovies } = useContext(SearchContext);

  return (
    <InnerColumn>
      {!queriedMovies.length && <h1>no results</h1>}
      <ul className="search__searchList">
        {queriedMovies.map((movie) => (
          <MovieCard
            movie={movie}
            src={`${baseImgUrl}${movie.backdrop_path}`}
            alt={movie.name}
            key={movie.id}
            className="searchResults__searchedMovie"
          />
        ))}
      </ul>
    </InnerColumn>
  );
}
