import { Link } from "react-router-dom"
import { useAuthStore } from "../../hooks"
import { products } from './products'

export const Store = () => {

  const { status } = useAuthStore()

  return (
    <div className="w-full h-full flex flex-col items-center px-4 py-12 gap-10">
      <h1 className={ `text-5xl font-bold font-serif text-center ${ status === 'authenticated' ? 'text-white' : 'text-gray-900' }` }> Tienda </h1>
      <p className={ `text-justify text-lg font-serif ${ status === 'authenticated' ? 'text-white' : 'text-gray-900' }` }> En esta sección podrás encontrar toda la coleccion de nuestras motos. </p>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          products.map( ( product ) => (
            <article className="w-full h-full flex flex-col items-center gap-4 px-4 py-12 bg-gray-100 rounded-lg shadow-lg" key={ product.id }>
              <section className="w-full h-full flex flex-col items-center gap-4">
                <img className="w-full h-full object-cover rounded-lg shadow-lg" src={ product.image } alt={ product.model } />
              </section>
              <section className="w-full h-full flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold font-serif text-center text-gray-900"> { product.brand } { product.model } </h1>
                <p className="text-justify text-lg font-serif text-gray-900"> { product.description } </p>
                <p className="text-justify text-lg font-serif text-gray-900"> Año: { product.year } </p>
              </section>
              <section className="w-full h-full flex flex-col items-center gap-4">
                <p className="text-justify text-lg font-serif text-gray-900"> Precio: { product.price }<span className="text-amber-700 font-bold">Bs.</span> </p>
                <Link to={ ( status === 'authenticated' ) ? `/store/${ product.id }` : '/auth/signin' } className="w-full h-full flex flex-col items-center gap-4 px-4 py-2 bg-gray-900 rounded-lg shadow-lg">
                  <p className="text-justify text-lg font-serif text-gray-100"> Cotizar </p>
                </Link>
              </section>
            </article>
          ))
        }
      </div>
    </div>
  )
}
