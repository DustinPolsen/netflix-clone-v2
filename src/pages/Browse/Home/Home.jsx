import { Children, useContext, useEffect, useRef } from 'react'; // give everything without an id it's own unique key prop without using index (which is problematic) or some id generator by using React.Children.

// components
import Banner from '../../../components/MovieComponents/Banner/Banner';
import Row from '../../../components/MovieComponents/Row/Row';
import SearchResultsView from '../../../components/MovieComponents/SearchResults/SearchResultsView';
import Layout from '../../../components/shared/Layout/Layout';

// utils, helpers and Services
import { movieRows } from '../../../utils/movieRequests';

// context
import { SearchContext } from '../../../context/search/searchContext';
import { MoviesStateContext } from '../../../context/movies/moviesContext';

export default function Home() {
  const { search, setBrowseName } = useContext(SearchContext);
  const { rows } = useContext(MoviesStateContext);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      setBrowseName('');
    }
    return () => {
      isMounted.current = false;
    };
  }, [setBrowseName]);

  const ROWS = Object.entries(rows).map(([title, movies], idx) => {
    return (
      <Row
        key={title}
        initialMoviesState={movies}
        rowIndex={idx}
        title={title}
        isLargeRow={title.match(/^netflix originals$/i)}
      />
    );
  });

  const RESULTS = <SearchResultsView />;

  const moviesJSX = !search ? ROWS : RESULTS;

  return (
    <Layout>
      <Banner />
      {moviesJSX}
    </Layout>
  );
}
