import { useAuthStore } from '../../hooks'

export const Me = () => {

  const { user } = useAuthStore()

// id?: string
//   name: string;
//   lastName: string
//   phone: number
//   dni: number
//   civilStatus: string
//   gender: string
//   birthDate: string
//   email: string

  return (
    <div className="flex flex-col items-center justify-center h-full gap-20 w-full">
      <div className="w-full flex justify-center items-center gap-4">
        <h1 className="text-5xl font-bold text-white"> Mi perfil </h1>
      </div>
      <div className="w-full sm:w-1/2 flex justify-center items-center gap-4 bg-emerald-800 rounded-lg shadow-lg p-10 hover:translate-y-2 transition duration-300 transform hover:scale-105">
        <div className="w-full flex flex-col justify-center gap-4 px-4 py-8">
          <p className="text-2xl font-bold text-amber-300"> Nombres: </p>
          <div className="w-full flex justify-center gap-4">
            <p className="text-2xl text-white"> { user?.name } </p>
            <p className="text-2xl text-white"> { user?.lastName } </p>
          </div>
          <div className="text-amber-300 flex flex-col gap-4">
            <span className="font-bold text-2xl"> Telefono: </span>
            <p className="text-2xl text-white text-center">  { user?.phone } </p>
            <span className="font-bold text-2xl"> C.I.: </span>
            <p className="text-2xl text-white text-center">  { user?.dni } </p>
            <span className="font-bold text-2xl"> Correo: </span>
            <p className="text-2xl text-white text-center">  { user?.email } </p>
            <span className="font-bold text-2xl"> Estado civil: </span>
            <p className="text-2xl text-white text-center">  { user?.civilStatus } </p>
            <span className="font-bold text-2xl"> Genero: </span>
            <p className="text-2xl text-white text-center">  { user?.gender } </p>
            <span className="font-bold text-2xl"> Fecha de nacimiento: </span>
            <p className="text-2xl text-white text-center">  { user?.birthDate } </p>
          </div>

        </div>
      </div>
    </div>
  )
}
