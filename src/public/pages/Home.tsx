import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const imagenes = [
  {
    url: 'https://i.ibb.co/WBgvHjK/15910226217378.jpg',
    alt: 'Imagen 1',
    descripcion: 'Contamos con las mejores motos del mercado.',
  },
  {
    url: 'https://i.ibb.co/pb5bDSW/venta-motos-bajaj-motozuni.webp',
    alt: 'Imagen 2',
    descripcion: 'Tenemos los mejores precios del mercado.',
  },
  {
    url: 'https://i.ibb.co/tZnY9jQ/photo-2023-04-15-10-22-09.webp',
    alt: 'Imagen 3',
    descripcion: 'Contamos con los mejores planes de financiamiento.',
  },
]

export const Home = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-12 bg-slate-800"
      style={ {
        backgroundImage: 'url(https://i.ibb.co/mGkj52w/triumph-bonneville-3840x2160-xtrafondos-com.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundSize: '100% 100%',
      } }
    >
      <h1
        className="text-5xl font-bold font-serif text-center text-white bg-black bg-opacity-50 p-4 rounded-xl"
      > Inicio </h1>

      <div className="flex flex-row justify-center items-center gap-4 px-4 py-8 w-full">
        <div
          className="w-1/2 h-96 rounded-lg shadow-lg"
        ></div>
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-1/2 md:1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
          <Carousel infiniteLoop autoPlay showThumbs={ false } >
            {
              imagenes.map( ({ url, alt, descripcion }) => (
                <div key={ url }
                  className="w-full h-full"
                >
                  <img
                    src={ url } alt={ alt }
                    className="w-full h-96 object-cover"
                  />
                  <p className="legend"> { descripcion } </p>
                </div>
              ))
            }

          </Carousel>
          <p className="text-justify text-lg font-serif text-black bg-white bg-opacity-50 p-4 rounded-xl hover:bg-opacity-100 transition duration-500 ease-in-out">
            El sistema de gestión de ventas de motos es una aplicación informática diseñada para facilitar y optimizar el proceso de ventas en un concesionario o tienda de motocicletas. Este tipo de sistema es utilizado por los vendedores y el personal administrativo para gestionar eficientemente el ciclo completo de venta, desde la atención al cliente hasta el seguimiento postventa.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-7/12">
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-full">
          <h3 className="text-3xl font-bold font-serif text-center text-white"> Ubicación </h3>
          <iframe src={ `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3825.497992237618!2d-68.1707!3d-16.500937999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDMwJzAzLjQiUyA2OMKwMTAnMTQuNSJX!5e0!3m2!1ses-419!2sbo!4v1690152188776!5m2!1ses-419!2sbo` } width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}
