import Tarjeta from '@/app/Tarjeta'
import { BsShield, BsBriefcase, BsNewspaper } from 'react-icons/bs'
import { MdOutlineColorLens } from 'react-icons/md'
import { AiOutlineCode } from 'react-icons/ai'
import { BiMicrophone } from 'react-icons/bi'
import Invitacion from '@/app/Invitacion'

export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6 col-start-4">
        <h1 className="text-yellow-300 lg:text-4xl md:text-2xl text-xl font-semibold text-center lg:leading-relaxed md:leading-relaxed leading-relaxed">
          Se busca personal
        </h1>
      </div>
      <div className="col-span-3">
        <p className='text-noche-300 text-right lg:text-base text-sm  '>
          17/5/2023
        </p>
      </div>
      <div className="col-span-12 border-t border-yellow-300/90">
        <p className='text-noche-100 leading-relaxed md:text-lg text-sm md:pt-4 pt-2'>
          Insomnia está en busca de un equipo creativo para ayudarnos a mejorar nuestra comunidad. Únete a nuestro proyecto innovador y juntos llevaremos esta experiencia única al siguiente nivel.
        </p>
        <h1 className="text-yellow-300 lg:text-2xl md:text-2xl text-xl font-semibold text-center lg:leading-relaxed md:leading-relaxed leading-relaxed">
          Necesitamos los siguientes roles
        </h1>
      </div>
      <Tarjeta
        enlace='#'
        className='lg:col-span-4 md:col-span-4 col-span-12'
        titulo='Moderador'
        subtitulo='1 cupo disponibles'
        desc='Aquellos miembros del personal que se dedican a regular y moderar la actividad en el servidor.'
      >
        <BsShield />
      </Tarjeta>
      <Tarjeta
        enlace=''
        className='lg:col-span-4 md:col-span-4 col-span-12'
        titulo='Diseñador'
        subtitulo='2 cupos disponibles'
        desc='Los encargados del diseño gráfico, construcciones en Minecraft, edición de vídeos, etc.'
      >
        <MdOutlineColorLens />
      </Tarjeta>
      <Tarjeta
        enlace=''
        className='lg:col-span-4 md:col-span-4 col-span-12'
        titulo='Anfitrión'
        subtitulo='1 cupo disponibles'
        desc='El personal encargado de dar vida a la comunidad y fomentar la actividad entre los usuarios.'
      >
        <BiMicrophone />
      </Tarjeta>
      <Tarjeta
        enlace=''
        className='lg:col-span-4 md:col-span-4 col-span-12'
        titulo='Programador'
        subtitulo='1 cupo disponibles'
        desc='Miembros del personal cuya labor es prestar sus habilidades de programación para mantener la página de Insomnia y otras cosas.'
      >
        <AiOutlineCode />
      </Tarjeta>
      <Tarjeta
        enlace=''
        className='lg:col-span-4 md:col-span-4 col-span-12'
        titulo='Publicista'
        subtitulo='4 cupos disponibles'
        desc='El personal encargado de hacer publicidad de Insomnia en otros servidores (no spam).'
      >
        <BsBriefcase />
      </Tarjeta>
      <Tarjeta
        enlace=''
        className='lg:col-span-4 md:col-span-4 col-span-12'
        titulo='Periodista'
        subtitulo='2 cupos disponibles'
        desc='Aquellos miembros del personal cuya labor es publicar información, hechos curiosos, novedades y diseños sobre ciertos temas relevantes en Insomnia.'
      >
        <BsNewspaper />
      </Tarjeta>
      <div className="md:col-span-6 col-span-12 md:col-start-4">
        <Invitacion
          subtitulo='¡Únete a Insomnia para solicitar ser miembro del personal!'
        />
      </div>
    </div>
  )
}