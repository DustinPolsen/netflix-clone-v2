import Levenshtein from 'levenshtein';
import React, { useState, createContext, useContext } from 'react';
import { getSearchedMovies } from '@/services/movies';
import { ProfilesStateContext } from '../profiles/profilesContext';
import { debounce } from '@/utils/debounce';

export const SearchContext = createContext(null);

export default function SearchContextProvider({ children }) {
  const [search, setSearch] = useState('');
  const [queriedMovies, setQueriedMovies] = useState([]);
  const [browseName, setBrowseName] = useState('');

  const { currentProfile } = useContext(ProfilesStateContext);

  const onSearch = (e) => {
    setSearch(e.target.value);
    handleSearch(e);
  };

  const handleSearch = debounce(async () => {
    const searchedMovies = await getSearchedMovies(
      search,
      currentProfile.isKid
    );

    const newQueriedMovies = searchedMovies
      .filter(({ backdrop_path }) => Boolean(backdrop_path)) // don't make a cell for a movie that has images that are undefined.
      .sort((a, b) => {
        let leva = new Levenshtein(a.title, search).distance; // the movie that is closest to the users search input will appear in top-left.
        let levb = new Levenshtein(b.title, search).distance;
        return leva - levb;
      });

    setQueriedMovies(newQueriedMovies);
  }, 1000);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        queriedMovies,
        onSearch,
        browseName,
        setBrowseName,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
