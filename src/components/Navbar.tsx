import { Link } from 'react-router-dom'
import { INavbarLinks } from '../interfaces'
import { useAuthStore } from '../hooks'

interface IProps {
  navbarLinks: INavbarLinks[],
  bgImage?: boolean,
  style?: React.CSSProperties
  border?: boolean
  logo?: boolean
}

export const Navbar = ( { navbarLinks, bgImage, style, border, logo } : IProps ) => {

  const { status, startSignOut } = useAuthStore()

  return (
    
    <nav
      className={ `w-full flex flex-row ${ !border ? 'border-b-4' : ''  } ${ bgImage ? `py-20` : 'py-5 bg-gray-900' } ${ logo ? 'justify-between' : '' }` }
      style={ style }
    >
      <ul className="w-full flex flex-row justify-start text-white px-5 gap-4">
        {
          logo && (
            <li className="flex flex-row justify-center">
              <div className="w-40 h-28 rounded-lg shadow-lg ml-10"
                style={ {
                  backgroundImage: 'url(/images/background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '100% 100%',
                  backgroundColor: '#11212A',
                } }
              ></div>
            </li>
          )
        }
      </ul>
      <ul className="w-full flex flex-row justify-end text-white px-5 gap-4">
        {
          navbarLinks.map( ( { to, name, exact, onClick } ) => (
            <li key={ name } className="px-6 py-2 font-bold text-lg flex items-center text-center rounded-3xl hover:underline">
              <Link
                to={ `${ ( exact ) ? to : '../' }${ ( to === '/' ) ? '' : to }` }
                onClick={ onClick }
              > { name } </Link>
            </li>
          ) )
        }
        {
          status === 'authenticated' && (
            <>
              <div className="flex-grow"></div>
              <li
                className="px-6 py-2 font-bold text-lg flex items-center text-center rounded-lg hover:underline border-2 border-red-700"
                onClick={ () => startSignOut() }
              >
                <button
                > Cerrar Sesion </button>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  )
}
