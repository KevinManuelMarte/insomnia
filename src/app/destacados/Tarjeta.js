import Distincion from '../Distincion'
import Image from 'next/image'

export function Tarjeta(props) {
  return (
    <div className={`
    grid grid-cols-12 border p-2 rounded-lg text-white m-4
    ${props.bg == 'cyan' ? 'bg-gradient-to-b from-cyan-400 to-cyan-700 border-4 border-cyan-400' : ''}
    ${props.bg == 'emerald' ? 'bg-gradient-to-b from-emerald-400 to-emerald-700 border-4 border-emerald-400' : ''}
    ${props.bg ? null : 'border-neutral-700'}
    `}>
      <div className='col-span-2 p-2'>
        <Image src={props.src} height={512} width={512} alt={props.alt} quality={100} />
      </div>
      <div className='col-span-7'>
        <h1 className='text-4xl leading-relaxed font-medium'>
          {props.user} <Distincion tipo={props.rareza} op='s' />
        </h1>
        <p className='text-lg leading-5'>
          {props.desc}
        </p>
        <h1 className='text-2xl pt-2 font-medium'>Datos</h1>
        <p className='leading-5'>
          Discord: {props.discord} <br />
          Nacionalidad: {props.nacion} <br />
          Edad: {props.edad} años
        </p>
      </div>
      <div className='col-span-3'>
        <h1 className='text-4xl leading-relaxed pb-2 text-center font-medium'>Distinciones</h1>
        <div className='flex justify-center flex-wrap'>
          {props.children}
        </div>
      </div>
    </div>
    
  )
}