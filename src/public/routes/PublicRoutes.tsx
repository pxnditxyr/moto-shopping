import { Navbar, RoutesManager } from '../../components'
import { Footer } from '../../components/Footer'
import { navbarLinksPublic } from '../helpers'
import { routes } from './publicRoutes'

export const PublicRoutes = () => {
  return (
    <div>
      <Navbar
        navbarLinks={ navbarLinksPublic }
        logo
        border
      />
      <RoutesManager routes={ routes } />
      <Footer />
    </div>
  )
}
