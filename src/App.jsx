import './App.css';
import { useContext, useEffect } from 'react';
import { MoviesStateContext } from '@/context/movies/moviesContext';
import NetflixLoading from '@/components/shared/Loading/NetflixLoading';
import AppRouter from '@/router/AppRouter';
import { useLocation } from 'react-router';

const App = () => {
  const { moviesAreLoading, genresAreLoading, moviesPaintedOnVirtualDOM } =
    useContext(MoviesStateContext);

  const { pathname } = useLocation();

  useEffect(() => {
    if (!moviesPaintedOnVirtualDOM) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'inherit';
    }
  }, [moviesPaintedOnVirtualDOM]);

  const loadingJSX = (
    <div className="loading__mask">
      <NetflixLoading />
    </div>
  );

  if (moviesAreLoading || genresAreLoading) {
    return loadingJSX;
  }

  return (
    <div className="App">
      {/*   loading at browse page to not let the user see the akwardness of cloning the elements
        of row movies, used as a mask to still allow Row.jsx access the ref of the elements (they still exist)
      */}
      {pathname.includes('/browse') && !moviesPaintedOnVirtualDOM
        ? loadingJSX
        : null}
      <AppRouter />
    </div>
  );
};

export default App;
