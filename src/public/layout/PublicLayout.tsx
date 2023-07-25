import { Navbar } from '../../components';
import { INavbarLinks } from '../../interfaces';

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  navbarLinks?: INavbarLinks[];
  className?: string;
  height?: boolean;
}

export const PublicLayout = ( { children, title, navbarLinks, className, height } : IProps ) => {
  return (
    <div className={ `w-full flex flex-col bg-slate-800 ${ className } ${ height ? 'h-full' : 'h-screen' }` }>
      {
        navbarLinks && (
          <Navbar navbarLinks={ navbarLinks } />
        )
      }
      <div
        className="w-full h-full flex flex-col items-center gap-4 px-4 py-12"
      >
        <h1
          className="text-5xl font-bold font-serif text-center text-white"
        > { title } </h1>
        <main className="w-full flex flex-col justify-center items-center gap-4 px-4 py-8">
          { children }
        </main>
      </div>
    </div>
  )
}
