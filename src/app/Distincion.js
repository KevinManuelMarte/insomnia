export default function Distincion(props) {
  if (!props.op) {
    return (
      <span
        key={props.key}
        className={`
        border rounded-full py-1 px-1 leading-none
        ${props.className}
        ${props.tipo == 1 ? 'text-emerald-400 border-emerald-400' : ''}
        ${props.tipo == 2 ? 'text-red-400 border-red-400' : ''}
        ${props.tipo == 3 ? 'text-lime-400 border-lime-400' : ''}
        ${props.tipo == 4 ? 'text-sky-300 border-sky-300' : ''}
        ${props.tipo == 5 ? 'text-fuchsia-300 border-fuchsia-300' : ''}
        ${props.tipo == 6 ? 'text-amber-400 border-amber-400' : ''}
        ${props.tipo == 7 ? 'text-orange-400 border-orange-400' : ''}
        ${props.tipo == 8 ? 'text-pink-400 border-pink-400' : ''}
        ${props.tipo == 9 ? 'text-rose-300 border-rose-300' : ''}
        ${props.tipo == 10 ? 'text-violet-400 border-violet-400' : ''}
        ${props.tipo == 11 ? 'text-orange-200 border-orange-200' : ''}
        
        ${props.tipo == 'c' ? 'text-white border-white' : null}
        ${props.tipo == 'r' ? 'text-white border-white' : null}
        ${props.tipo == 'u' ? 'text-white border-white' : null}
        ${props.tipo == 'e' ? 'text-white border-white' : null}
        ${props.tipo == 'l' ? 'text-white border-white' : null}

        ${props.tipo == 'T2' ? 'text-green-400 border-green-400' : ''}
        `}
      >
        {props.tipo == 1 ? 'Administrador' : null}
        {props.tipo == 2 ? 'Mano derecha' : null}
        {props.tipo == 3 ? 'Jefe moderador' : null}
        {props.tipo == 4 ? 'Moderador' : null}
        {props.tipo == 5 ? 'Donador' : null}
        {props.tipo == 6 ? 'Programador' : null}
        {props.tipo == 7 ? 'Publicista' : null}
        {props.tipo == 8 ? 'Anfitrión' : null}
        {props.tipo == 9 ? 'Diseñador' : null}
        {props.tipo == 10 ? 'Soporte' : null}
        {props.tipo == 11 ? 'Pride guardián' : null}

        {props.tipo == 'c' ? 'Común' : null}
        {props.tipo == 'r' ? 'Raro' : null}
        {props.tipo == 'u' ? 'Único' : null}
        {props.tipo == 'e' ? 'Épico' : null}
        {props.tipo == 'l' ? 'Legendario' : null}

        {props.tipo == 'T2' ? 'Estelar Tecla 2' : null}
      </span>
    )
  } else {
    return (
      <span key={props.key} className={`border rounded-full py-1 px-1 leading-none text-white border-white ${props.className}`}>
        {props.tipo == 1 ? 'Administrador' : null}
        {props.tipo == 2 ? 'Mano derecha' : null}
        {props.tipo == 3 ? 'Jefe moderador' : null}
        {props.tipo == 4 ? 'Moderador' : null}
        {props.tipo == 5 ? 'Donador' : null}
        {props.tipo == 6 ? 'Programador' : null}
        {props.tipo == 7 ? 'Publicista' : null}
        {props.tipo == 8 ? 'Anfitrión' : null}
        {props.tipo == 9 ? 'Diseñador' : null}
        {props.tipo == 10 ? 'Soporte' : null}
        {props.tipo == 11 ? 'Pride guardián' : null}

        {props.tipo == 'c' ? 'Común' : null}
        {props.tipo == 'r' ? 'Raro' : null}
        {props.tipo == 'u' ? 'Único' : null}
        {props.tipo == 'e' ? 'Épico' : null}
        {props.tipo == 'l' ? 'Legendario' : null}

        {props.tipo == 'T2' ? 'Estelar Tecla 2' : null}
      </span>
    )
  }
}