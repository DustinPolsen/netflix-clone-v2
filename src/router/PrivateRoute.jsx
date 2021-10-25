import { Navigate } from 'react-router-dom';
import { ROUTES } from '../utils/navigation';

export default function PrivateRoute({ children }) {
  const profiles = JSON.parse(localStorage.getItem('profiles'));

  if (profiles?.currentProfile?.id) {
    return <>{children}</>;
  }

  return <Navigate to={ROUTES.SELECT_PROFILE} />;
}
