import { Navigate, Route } from 'react-router-dom'
import { RoutesManager } from '../../components'
import { IRoute } from '../../interfaces'
import { SignIn, SignUp } from '../pages'


export const AuthRoutes = () => {

  const routes : IRoute[] = [
    {
      path: 'signin',
      Component: SignIn,
    },
    {
      path: 'signup',
      Component: SignUp,
    },
  ]

  return (
    <div>
      <RoutesManager routes={ routes } notUseNotFound>
        <Route path="*" element={ <Navigate to="signin" /> } />
      </RoutesManager>

    </div>
  )
}
