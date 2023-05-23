export function Titulo1(props) {
  return (
    <h1 className={`
    ${props.className}
    lg:text-4xl md:text-2xl text-xl font-semibold`}>
      {props.children}
    </h1>
  )
}

export function Titulo2(props) {
  return (
    <h2 className={`
    ${props.className}
    lg:text-3xl md:text-xl text-lg font-semibold`}>
      {props.children}
    </h2>
  )
}

export function Subtitulo(props) {
  return (
    <h3 className={`
    ${props.className}
    lg:text-xl md:text-lg text-sm
    `}>
      {props.children}
    </h3>
  )
}

export function Parrafo(props) {
  return (
    <p className={`
    ${props.className}
    lg:text-xl md:text-lg text-sm
    `}>
      {props.children}
    </p>
  )
}

export function Lista(props) {
  return (
    <ul className={`
    ${props.className}
    md:text-lg text-sm
    `}>
      {props.children}
    </ul>
  )
}