export default function Carta(props) {
  return (
    <a href={props.enlace} className='xl:col-span-2 col-start-2 col-span-10 text-stone-300 border border-noche-700/50 rounded-lg p-2 m-2 hover:border-noche-700 duration-200 '>
      <h1 className='text-xl font-medium border-b border-noche-700/50 pb-1'>{props.title}</h1>
      <p className='text-sm pt-1'>
        {props.desc}
      </p>
    </a>
  )
}