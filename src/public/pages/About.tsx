import { PublicLayout } from '../layout'

export const About = () => {
  return (
    <PublicLayout title="Nuestra Ubicacion" height>
      <div
        className="w-1/2 bg-white rounded-lg shadow-lg py-8 px-12"
      >
        <h1 className="text-3xl font-bold my-4 text-center">Creación de la primera compañía de Bomberos Voluntarios de Bolivia, en Antofagasta antes de la guerra del pacifico</h1>
        <h2 className="text-xl font-bold my-2">Acta de Fundación</h2>
        <p className="my-2">En Antofagasta a cuatro de Abril de un mil ochocientos setenta y cinco en vista del lamentable incendio que destruyó una parte del centro de la población de este puerto, el Viernes dos del que rige, once ante meridiano, los vecinos acordaron celebrar un “meeting” el que tuvo lugar el día de hoy a las dos treinta horas P.M. con el objeto de la organización de un Cuerpo de Bomberos y bajo la presidencia del señor Francisco Errázuriz, El señor doctor don Abdón S. Ondarza , dio cuenta de las erogaciones voluntarias recolectadas en unión delos señores Pedro Machefort , Cruz Muñoz y Benito Fernández ascendiendo a la suma de un mil cuarenta y cinco pesos. Dando igual cuenta el señor Luis Dorado de lo recogido por él hasta la cantidad de cuatrocientos cincuenta pesos.</p>
        
        <h3 className="text-lg font-bold my-2">Se acordó:</h3>
        <ol className="list-decimal list-inside my-2">
          <li>La formación de dos Compañías como sigue: Compañía Guardia de Propiedad y Compañía de Hachas, Ganchos y Escaleras.</li>
          <li>Que por votación, a mayoría de votos, cada una de las Compañías hiciera elección de su Capitán y Oficiales y asimismo de tres delegados, por cada una de ellas, para elegir el Directorio del Cuerpo, lo que se efectuó del modo siguiente:</li>
        </ol>
        
        <h4 className="text-base font-bold my-2">Compañía de Hachas, Ganchos y Escaleras:</h4>
        <ul className="list-disc list-inside my-2">
          <li>Capitán Señor Luis Lichtenstein.</li>
          <li>Teniente 1º Señor César A. del Río.</li>
          <li>Teniente 2º Señor Luis C. Carvallo.</li>
          <li>Teniente 3º Señor Hernán F. Puelma.</li>
          <li>Secretario Señor Eleuterio Contreras.</li>
          <li>Tesorero Señor Benito Soto.</li>
        </ul>
        <p className="my-2">Delegados, señores César A. del Río, Luis A. Carvallo, Hernán Puelma</p>
        
        <h4 className="text-base font-bold my-2">Compañía Guardia de Propiedad:</h4>
        <ul className="list-disc list-inside my-2">
          <li> Capitán. Señor Salvador Reyes </li>
          <li> Teniente 1º Señor Alejandro Masnata. </li>
          <li> Teniente 2º Señor Regino Meza. </li>
          <li> Teniente 3º Señor Juan M. de Oliveira. </li>
          <li> Secretario Señor Belisario Campusano </li>
          <li> Delegados, señores Francisco Errázuriz, Luis Dorado, Abdón S. Ondarza. </li>
        </ul>
      </div>
    </PublicLayout>
  )
}
