
export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
      <div className="text-gray-900 font-bold text-4xl animate-pulse"> Cargando... </div>
    </div>
  )
}
