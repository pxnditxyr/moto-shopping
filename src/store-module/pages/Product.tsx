import { useParams } from 'react-router-dom'
import { useAuthStore } from '../../hooks'
import { products } from './products'



export const Product = () => {

  const { id } = useParams<{ id: string }>()
  const { user } = useAuthStore()
  const product = products.find( product => product.id === id )

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 p-4 text-slate-900">
      <article className="w-full h-full flex flex-col items-center p-4 bg-white rounded-lg lg:w-1/2">
        <section className="w-full h-full flex flex-col items-center p-4">
          <img className="w-full h-full" src={ product?.image } alt={ product?.model } />
        </section>
        <div className="w-full h-full flex md:flex-row p-4 items-center">
          <div className="w-full h-full flex flex-col p-4">
            <h2 className="text-2xl font-bold text-amber-700"> Datos de la moto </h2>
            <section className="w-full h-full flex flex-col p-4">
              <h2 className="text-2xl font-bold"> <span className="font-bold text-red-800">Marca:</span> { product?.brand }</h2>
              <h3 className="text-2xl font-bold"> <span className="font-bold text-red-800">Modelo:</span> { product?.model }</h3>
              <p className="text-2xl"><span className="font-bold text-red-800">Descripcion:</span> { product?.description }</p>
              <p className="text-2xl"><span className="font-bold text-red-800">Precio:</span> { ( product ) ? product.price + product.price * 0.13 : '0' }<span className="font-bold text-amber-700">Bs.</span> </p>
              <p className="text-2xl"><span className="font-bold text-red-800">Año:</span> { product?.year }</p>
            </section>
          </div>
          <div className="w-full h-full flex flex-col p-4">
            <h2 className="text-2xl font-bold text-amber-700"> Datos del usuario </h2>
            <section className="w-full h-full flex flex-col p-4">
              <p className="text-2xl font-bold"><span className="font-bold text-red-800">Nombres:</span> { user?.name } </p>
              <p className="text-2xl font-bold"><span className="font-bold text-red-800">Apellidos:</span> { user?.lastName } </p>
              <p className="text-2xl font-bold"><span className="font-bold text-red-800">Telefono:</span> { user?.phone } </p>
              <p className="text-2xl font-bold"><span className="font-bold text-red-800">C.I.:</span> { user?.dni } </p>
              <p className="text-2xl font-bold"><span className="font-bold text-red-800">Correo:</span> { user?.email } </p>
            </section>
          </div>
        </div>
      </article>
    </div>
  )
}
