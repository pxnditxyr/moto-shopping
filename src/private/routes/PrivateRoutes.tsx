import { Navigate, Route } from 'react-router-dom'
import { RoutesManager } from '../../components'
import { IRoute } from '../../interfaces'
import { PrivateLayout } from '../layout'
import { Articles } from '../../articles'
import { Me } from '../../me'
import { Store } from '../../store-module/pages/Store'
import { useAuthStore } from '../../hooks'
import { Product } from '../../store-module/pages/Product'


export const PrivateRoutes = () => {

  const { user } = useAuthStore()

  const routes : IRoute[] = [
    
    {
      path: 'store',
      Component: Store
    },
    {
      path: 'me',
      Component: Me,
    },
    {
      path: 'store/:id',
      Component: Product
    }
  ]

  if ( user.role === 'admin' ) {
    routes.push( {
      path: 'articles',
      Component: Articles
    } )
  }

  return (
    <PrivateLayout title="">
      <RoutesManager routes={ routes } notUseNotFound>
        <Route path="*" element={ <Navigate to="/me" /> } />
      </RoutesManager>
    </PrivateLayout>
  )
}
