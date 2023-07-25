import { Navbar } from '../../components';
import { INavbarLinks } from '../../interfaces';

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  hegiht?: boolean;
}

const navbarLinks : INavbarLinks[] = [
  {
    to: '/',
    name: 'Inicio',
    exact: true,
  },
]

export const AuthLayout = ( { children, title, hegiht } : IProps ) => {
  return (
    <div className={ `w-full flex flex-col ${ hegiht ? 'h-full' : 'h-screen' }` }>
      <Navbar navbarLinks={ navbarLinks } />
      <div
        className="w-full h-full flex flex-col justify-center items-center gap-4 px-4 py-8"
      >
        <h1
          className="text-3xl font-bold font-serif text-center"
        >{ title }</h1>
        <div className="w-full flex flex-col justify-center items-center gap-4 px-4 py-8">
          { children }
        </div>
      </div>
    </div>
  )
}
