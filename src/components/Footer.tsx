import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="rounded-lg shadow bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 gap-10">
            <div
              className="bg-white w-16 h-16 rounded-full overflow-hidden"
              style={ {
                  backgroundImage: 'url(/images/background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '100% 100%',
                } }>
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"> Moto Market </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          © 2023 <Link to="/" className="hover:underline">Moto Market™</Link>. Todos los Derechos Resevados.</span>
      </div>
    </footer>
  )
}
