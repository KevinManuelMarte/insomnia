export default function Distincion(props) {
  return (
    <span
      key={props.key}
      className={`
        border rounded-full
        ${props.className}
        ${props.tipo == 1 ? 'text-emerald-400 border-emerald-400' : ''}
        ${props.tipo == 2 ? 'text-red-400 border-red-400' : ''}
        ${props.tipo == 3 ? 'text-lime-400 border-lime-400' : ''}
        ${props.tipo == 4 ? 'text-teal-300 border-teal-300' : ''}
        ${props.tipo == 5 ? 'text-blue-300 border-blue-300' : ''}
        ${props.tipo == 6 ? 'text-fuchsia-300 border-fuchsia-300' : ''}
        ${props.tipo == 7 ? 'text-amber-400 border-amber-400' : ''}
        ${props.tipo == 8 ? 'text-orange-400 border-orange-400' : ''}
        ${props.tipo == 9 ? 'text-pink-400 border-pink-400' : ''}
        ${props.tipo == 10 ? 'text-rose-300 border-rose-300' : ''}
        ${props.tipo == 11 ? 'text-violet-400 border-violet-400' : ''}
        ${props.tipo == 12 ? 'text-orange-200 border-orange-200' : ''}
        
        ${props.tipo == 'c' ? 'text-white border-white' : ''}
        ${props.tipo == 'r' ? 'text-white border-white' : ''}
        ${props.tipo == 'u' ? 'text-white border-white' : ''}
        ${props.tipo == 'e' ? 'text-white border-white' : ''}
        ${props.tipo == 'l' ? 'text-white border-white' : ''}

        ${props.tipo == 'T2' ? 'text-green-400 border-green-400' : ''}
        `}
    >
      {props.tipo == 1 ? 'Administrador' : null}
      {props.tipo == 2 ? 'Mano derecha' : null}
      {props.tipo == 3 ? 'Jefe moderador' : null}
      {props.tipo == 4 ? 'Moderador' : null}
      {props.tipo == 5 ? 'Moderador interno' : null}
      {props.tipo == 6 ? 'Donador' : null}
      {props.tipo == 7 ? 'Desarrollador' : null}
      {props.tipo == 8 ? 'Publicista' : null}
      {props.tipo == 9 ? 'Anfitrión' : null}
      {props.tipo == 10 ? 'Diseñador' : null}
      {props.tipo == 11 ? 'Soporte' : null}
      {props.tipo == 12 ? 'Pride guardián' : null}

      {props.tipo == 'c' ? 'Común' : null}
      {props.tipo == 'r' ? 'Raro' : null}
      {props.tipo == 'u' ? 'Único' : null}
      {props.tipo == 'e' ? 'Épico' : null}
      {props.tipo == 'l' ? 'Legendario' : null}

      {props.tipo == 'T2' ? 'Estelar Tecla 2' : null}
    </span>
  )
}
