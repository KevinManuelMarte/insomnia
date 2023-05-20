export default function Carta(props) {
  return (
    <a href={props.enlace} className='xl:col-span-3 col-start-2 col-span-10 text-stone-300 bg-noche-700/20 rounded-lg p-8 hover:bg-noche-700/50 duration-200 '>
      <h1 className='text-xl font-medium border-b border-noche-700/50 pb-1 flex items-center gap-2'>{props.children} {props.title}</h1>
      <p className='text-sm pt-1 text-noche-300'>
        {props.desc}
      </p>
    </a>
  )
}