import Link from 'next/link'
import Distincion from './Distincion'
import Image from 'next/image'

export default function Tarjeta(props) {
  return (
    <div className={props.className} key={props.key}>
      <Link href={props.enlace} className="bg-noche-700/20 rounded-lg p-8 flex justify-between items-center flex-wrap">
        <div className='w-5/6'>
          <div className='flex items-center text-white text-xl gap-2'>
            {props.children}
            <p>{ props.titulo }</p>
            {props.distincion ? (
              <Distincion className='text-sm' tipo={props.distincion} />
            ) : null}
          </div>
          <p className='text-noche-300'>{ props.subtitulo }</p>
        </div>
        {props.img_src ? (
          <Image className='rounded-full w-1/6' src={props.img_src} height={70} width={70} quality={100} alt={props.img_alt} />
        ) : null}
        <div className='pt-2'>
          <p className="text-noche-200">
            { props.desc }
          </p>
        </div>
      </Link>
    </div>
  )
}