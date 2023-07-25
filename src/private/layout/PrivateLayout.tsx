import { Navbar } from '../../components';
import { useUiStore } from '../../hooks';
import { INavbarLinks } from '../../interfaces';

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  hegiht?: boolean;
}


export const PrivateLayout = ( { children, title, hegiht } : IProps ) => {

  const navbarLinks : INavbarLinks[] = [
    {
      to: 'store',
      name: 'Tienda',
      onClick: () => closeDateModal(),
    },
    {
      to: 'me',
      name: 'Me',
      onClick: () => closeDateModal(),
    },
  ]

  const { closeDateModal } = useUiStore()

  return (
    <div className={ `w-full flex flex-col ${ hegiht ? 'h-full' : 'h-screen' } bg-slate-800` }>
      <Navbar navbarLinks={ navbarLinks } border />
      <div
        className="w-full h-full flex flex-col items-center gap-4 px-4 py-8 overflow-y-auto"
      >
        <h1
          className="text-3xl font-bold font-serif text-center text-white"
        >{ title }</h1>
        <div className="w-full flex flex-col justify-center items-center gap-4 px-4 py-8">
          { children }
        </div>
      </div>
    </div>
  )
}
