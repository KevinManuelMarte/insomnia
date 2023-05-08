export default function Distincion(props) {
  return (
    <span className={`border text-sm rounded-full py-1 px-2 m-1 ${props.color}`}>
      {props.children}
    </span>
  )
}