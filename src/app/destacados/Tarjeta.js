import Distincion from '../Distincion'
import Image from 'next/image'

export default function Tarjeta(props) {
  return (
    <li className="p-2" key={props.key}>
      <div className="bg-noche-700/20 rounded-lg p-8  flex justify-between items-center flex-wrap">
        <div>
          <div className='flex items-center'>
            <p className="text-white text-xl pr-2">{ props.usuario }</p>
            <Distincion className='text-sm' tipo={props.tipo} op={props.op} />
          </div>
          <p className='text-noche-300'>{ props.cargo }</p>
        </div>
        <Image className='rounded-full' src={ props.img_src } height={70} width={70} quality={100} alt={`Foto de perfil de ${props.usuario}`} />
        <div className='pt-2'>
          <p className="text-noche-100">
            { props.desc }
          </p>
        </div>
      </div>
    </li>
  )
}