import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { PublicRoutes } from '../public/routes/PublicRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';
import { Loading } from '../pages';
import { PrivateRoutes } from '../private/routes';

export const AppRouter = () => {
  
  const { status, checkAuthToken } = useAuthStore();

  useEffect( () => {
    checkAuthToken();
  }, [] )

  if ( status === 'checking' ) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Routes>
        {
          ( status === 'not-authenticated' )
            ? (
              <>
                <Route path="/*" element={ <PublicRoutes /> } />
                <Route path="auth/*" element={ <AuthRoutes /> } />

                <Route path="me" element={ <Navigate to="/auth/signin" /> } />
                <Route path="articles/*" element={ <Navigate to="/auth/signin" /> } />
                <Route path="store/*" element={ <Navigate to="/auth/signin" /> } />
              </>
            )
            : (
              <>
                <Route path="/*" element={ <PrivateRoutes /> } />
              </>
            )
        }
      </Routes>
    </BrowserRouter>
  )
}
