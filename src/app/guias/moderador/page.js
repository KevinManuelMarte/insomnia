import { Parrafo, Titulo1, Titulo2 } from '@/app/Mini';
import Tarjeta from '@/app/Tarjeta';

export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <Titulo1 className='text-yellow-300 text-center'>
          Guía para los moderadores
        </Titulo1>
        <Parrafo className='text-noche-100 pt-4 pb-8'>
          A continuación te presentamos las reglas que todo moderador de Insomnia debe seguir al pie de la letra.
        </Parrafo>
      </div>
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='1.- Mantener una buena comunicación dentro del equipo de moderación y con la comunidad del servidor en Discord'
      />
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='2.- Ser respetuoso y profesional en todo momento, incluso si se trata de un problema complicado'
      />
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='3.- Ser imparcial y objetivo al tomar decisiones en términos de moderación y disciplinas'
      />
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='4.- Ser empático y comprensivo con la comunidad del servidor y con los usuarios que tienen problemas o necesitan ayuda'
      />
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='5.- Ser transparentes en términos de decisiones y acciones de moderación'
      />
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='6.- Ser capaz de trabajar en equipo y comunicarse eficientemente sobre los problemas y soluciones'
      />
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='7.- Mantener la armonía dentro del servidor y con todos los usuarios'
      />
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='8.- No abusar de su poder y no tomar decisiones que benecifien solo a uno mismo o a su grupo'
      />
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='9.- No favoritismos de ningún tipo, ser justo en todos los tipos de moderación'
      />
      <Tarjeta
        div='s'
        className='col-span-6'
        titulo='10.- No tomar decisiones a la ligera y tratar de entender todos los puntos de vista.'
      />
      <div className="col-span-12">
        <Titulo2 className='text-yellow-300 text-center py-4'>
          Miembros del equipo de moderación
        </Titulo2>
      </div>
    </div>
  )
}