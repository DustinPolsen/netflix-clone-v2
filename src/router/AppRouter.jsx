import { Routes, Route } from 'react-router-dom';

// utils
import { ROUTES } from '../utils/navigation';

// pages
import Home from '../pages/Browse/Home/Home';
import MoviePlaybackView from '../pages/MoviePages/MoviePlaybackView';
import BrowseByCategoryAndId from '../pages/Browse/ByCategoryAndId/BrowseByCategoryAndId';
import ProfileSelect from '../pages/Profiles/ProfileSelect/ProfileSelect';
import ProfileManage from '../pages/Profiles/ProfileManage/ProfileManage';
import PrivateRoute from './PrivateRoute';
import ProfileCreate from '../pages/Profiles/ProfileCreate/ProfileCreate';
import MyList from '../pages/Browse/MyList/MyList';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.SELECT_PROFILE} element={<ProfileSelect />} />
    <Route path={ROUTES.MANAGE_PROFILE} element={<ProfileManage />} />
    <Route path={ROUTES.CREATE_PROFILE} element={<ProfileCreate />} />

    <Route
      path={ROUTES.BROWSE_ALL}
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
    <Route
      path={ROUTES.BROWSE_BY_GENRE}
      element={
        <PrivateRoute>
          <BrowseByCategoryAndId />
        </PrivateRoute>
      }
    />
    <Route
      path={ROUTES.BROWSE_BY_PERSON}
      element={
        <PrivateRoute>
          <BrowseByCategoryAndId />
        </PrivateRoute>
      }
    />
    <Route
      path={ROUTES.MY_LIST}
      element={
        <PrivateRoute>
          <MyList />
        </PrivateRoute>
      }
    />
    <Route
      path={ROUTES.MOVIE_PLAYBACK}
      element={
        <PrivateRoute>
          <MoviePlaybackView />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default AppRouter;
