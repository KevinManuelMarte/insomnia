export default function Carta(props) {
  return (
    <a href={props.enlace} className='col-span-2 text-stone-300 border border-rose-300/30 rounded-lg p-2 m-2 hover:border-stone-300 duration-200 '>
      <h1 className='text-xl font-medium border-b border-rose-300/30 pb-1'>{props.title}</h1>
      <p className='text-sm pt-1'>
        {props.desc}
      </p>
    </a>
  )
}