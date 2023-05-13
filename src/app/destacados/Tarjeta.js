import Distincion from '../Distincion'
import Image from 'next/image'

export default function Tarjeta(props) {
  return (
    <div className='2xl:grid grid-cols-12'>
      <div className={`
      2xl:col-span-10 2xl:col-start-2 grid grid-cols-12 border p-2 rounded-lg text-white m-4
      ${props.bg == 'cyan' ? 'bg-gradient-to-b from-cyan-400 to-cyan-700 border-4 border-cyan-400' : ''}
      ${props.bg == 'emerald' ? 'bg-gradient-to-b from-emerald-400 to-emerald-700 border-4 border-emerald-400' : ''}
      ${props.bg == 'red' ? 'bg-gradient-to-b from-red-400 to-red-700 border-4 border-red-400' : ''}
      ${props.bg ? null : 'border-noche-700/50'}
      `}>
        <div className='xl:col-span-2 lg:col-span-4 col-span-12 lg:row-span-2 p-2 flex justify-center'>
          <Image src={props.src} height={512} width={512} alt={props.alt} quality={100} className='rounded' />
        </div>
        <div className='xl:col-span-7 lg:col-span-8 col-span-12 xl:text-left lg:text-left text-center'>
          <h1 className='xl:text-4xl lg:text-2xl text-4xl leading-relaxed font-medium'>
            {props.usuario} <Distincion tipo={props.rareza} op='s' />
          </h1>
          <p className='xl:text-lg lg:text-sm text-xl xl:leading-5'>
            {props.desc}
          </p>
          <h1 className='xl:text-2xl lg:text-xl xl:pt-2 text-2xl font-medium'>Datos</h1>
          <p className='xl:text-lg xl:leading-5'>
            Discord: {props.discord} <br />
            Nacionalidad: {props.nacion} <br />
            Edad: {props.edad} años
          </p>
        </div>
        <div className='xl:col-span-3 lg:col-span-8 col-span-12'>
          <h1 className='xl:text-4xl lg:text-2xl text-2xl xl:pb-2 xl:text-center lg:text-left text-center font-medium'>Distinciones</h1>
          <div className='flex xl:justify-center lg:justify-start justify-center flex-wrap'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}