import Tarjeta from '../Tarjeta'
import { HiOutlineCube } from 'react-icons/hi'

export default function Page() {
  return (
    <div className='my-8 lg:mx-16 mx-4'>
      <div className='grid grid-cols-12'>
        <div className="md:col-span-4 col-span-12">
          <Tarjeta
            className='p-2'
            enlace='/blog/tecla-3'
            titulo='Tecla 3'
            subtitulo='Publicación activa'
            desc='Un servidor amistoso de Minecraft en modo supervivencia.'
          >
            <HiOutlineCube/>
          </Tarjeta>
        </div>
      </div>
    </div>
  )
}