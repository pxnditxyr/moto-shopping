import { PublicLayout } from '../layout'

export const Direction = () => {
  return (
    <PublicLayout title="Nuestra Ubicacion" height>
      <div className="flex flex-col justify-center items-center gap-4 px-4 py-8">
        <h3 className="text-2xl font-bold font-serif text-center text-white"> Dirección </h3>
        <p>
          <span className="text-white"> Calle 16 de Julio N° 2, </span>
          <span className="text-white"> Zona Villa Dolores, </span>
          <span className="text-white"> Ciudad de El Alto, </span>
          <span className="text-white"> La Paz - Bolivia </span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-7/12">
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-full">
          <h3 className="text-2xl font-bold font-serif text-center text-white"> Google Maps </h3>
          <iframe src={ `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3825.497992237618!2d-68.1707!3d-16.500937999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDMwJzAzLjQiUyA2OMKwMTAnMTQuNSJX!5e0!3m2!1ses-419!2sbo!4v1690152188776!5m2!1ses-419!2sbo` } width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </PublicLayout>
  )
}
