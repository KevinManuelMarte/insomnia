import Tarjeta from '@/app/Tarjeta'
import { BsShield, BsBriefcase, BsNewspaper } from 'react-icons/bs'
import { MdOutlineColorLens } from 'react-icons/md'
import { AiOutlineCode } from 'react-icons/ai'
import { BiMicrophone } from 'react-icons/bi'

export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Tarjeta
        enlace='/guias/moderador'
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
    </div>
  )
}