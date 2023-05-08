import Distincion from './Distincion'

export function TarjetaDistinciones(props) {
  return (
    <div className='col-span-3'>
      <h1 className='text-4xl leading-relaxed pb-2 text-center font-medium'>Distinciones</h1>
      <div className='flex justify-center flex-wrap'>
        {props.children}
      </div>
    </div>
  )
}

export function TarjetaInfo(props) {
  return (
    <div className='col-span-7'>
      <h1 className='text-4xl leading-relaxed font-medium'>{props.user} <Distincion>{props.rareza ? props.rareza : 'Común'}</Distincion> </h1>
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
  )
}

export function TarjetaFdp(props) {
  return (
    <div className='col-span-2 p-2'>
      {props.children}
    </div>
  )
}

export function Tarjeta(props) {
  return (
    <div className={`grid grid-cols-12 border ${props.borde ? props.borde : `border-neutral-800`} ${props.bg} p-2 rounded-lg duration-200 text-stone-100 m-4`}>
      {props.children}
    </div>
  )
}