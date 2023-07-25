import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout'
import { useAuthStore, useForm } from '../../hooks'
import { ChangeEvent, useEffect } from 'react'

import Swal from 'sweetalert2';

const formularioVacio = {
  email: '',
  password: ''
}

export const SignIn = () => {

  const { startSignIn, errorMessage } = useAuthStore();

  const {
    email, password,
    onInputChange, form
  } = useForm( formularioVacio )

  const onSubmit = ( event : ChangeEvent<HTMLFormElement> ) => {
    event.preventDefault()
    startSignIn({ email, password });
    console.log( form )
  }

  useEffect( () => {
    if ( errorMessage !== undefined ) {
      if ( typeof errorMessage === 'string' ) {
        Swal.fire( 'Error al Iniciar Sesión', errorMessage, 'error' );
      } else {
        Swal.fire( 'Error al Iniciar Sesión', errorMessage.join( ',\n' ), 'error' );
      }
    }
  }, [ errorMessage ] );

  return (
    <AuthLayout title="Iniciar Sesión en tu tienda de confianza">
      <div className="w-full h-full flex justify-center items-center gap-4 px-4 py-8 lg:w-1/2 md:1/3">
        <div className="bg-gray-900 w-full h-full flex justify-center items-center">
          <img className="w-96" src="/images/background.png" alt="logo" />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-4 py-8">
          <form
            onSubmit={ onSubmit }
            className="w-full flex flex-col justify-center items-center gap-8 px-4 py-8"
          >
            <input
              name="email"
              type="email"
              placeholder="Correo"
              value={ email }
              onChange={ onInputChange }
              className="w-full px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={ password }
              onChange={ onInputChange }
              className="w-full px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              className="w-full bg-gray-900 text-white font-bold py-2 rounded-sm hover:bg-black focus:outline-none"
            > Iniciar Sesión </button>
          </form>
          <Link to="../signup"
            className="text-gray-900 font-bold"
          > No tienes cuenta? Puedes Registrarte Aqui </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
