import Link from 'next/link'
import Distincion from './Distincion'
import Image from 'next/image'

export default function Tarjeta(props) {
  return (
    <div className={`${props.className} bg-noche-700/20 rounded-lg`} key={props.key}>
      {props.div === 's' ? (
        <div className="md:p-8 p-4 flex justify-between items-center flex-wrap">
          <div className={props.img_src ? 'w-5/6' : 'w-full'}>
            <div className='flex items-center text-white md:text-xl text-lg gap-2'>
              {props.children}
              <p>{props.titulo}</p>
              {props.distincion ? (
                <Distincion className='md:text-sm text-xs px-2' tipo={props.distincion} />
              ) : null}
            </div>
            <p className='text-noche-300 md:text-base text-sm'>{props.subtitulo}</p>
          </div>
          {props.img_src ? (
            <Image className='rounded-full w-1/6' src={props.img_src} height={70} width={70} quality={100} alt={props.img_alt} />
          ) : null}
          <div className='pt-2'>
            <p className="text-noche-200 md:text-base text-sm">
              {props.desc}
            </p>
          </div>
        </div>
      ): (
          <Link href ={props.enlace} className="md:p-8 p-4 flex justify-between items-center flex-wrap">
      <div className={props.img_src ? 'w-5/6' : 'w-full'}>
        <div className='flex items-center text-white md:text-xl text-lg gap-2'>
          {props.children}
          <p>{props.titulo}</p>
          {props.distincion ? (
            <Distincion className='md:text-sm text-xs px-2' tipo={props.distincion} />
          ) : null}
        </div>
        <p className='text-noche-300 md:text-base text-sm'>{props.subtitulo}</p>
      </div>
      {props.img_src ? (
        <Image className='rounded-full w-1/6' src={props.img_src} height={70} width={70} quality={100} alt={props.img_alt} />
      ) : null}
      <div className='pt-2'>
        <p className="text-noche-200 md:text-base text-sm">
          {props.desc}
        </p>
      </div>
    </Link>
      )}
    </div>
  )
}
