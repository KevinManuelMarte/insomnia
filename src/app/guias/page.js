import NavBar from '../NavBar';
import Carta from './Carta';

export default function Guias() {
  return (
    <>
      <div className='grid grid-cols-12 mt-8'>
        <div className='col-span-2'></div>
        <Carta
          enlace='/guias/moderación'
          title='Guía de moderación'
          desc='Guía oficial de moderación de Insomnia. Todo lo que necesitas aprender para ser moderador o,si eres un usuario, para prevenir abuso de poder.'
        />
        <Carta
          enlace='/guias/usuarios'
          title='Guía de usuarios'
          desc='Guía oficial de los usuarios de Insomnia. Todo lo que tienes que saber para ser un buen usuario y ser considerado por el pride guardián.'
        />
        <Carta
          enlace='/guias/diseñadores'
          title='Guía de diseñadores'
          desc='Guía oficial de los diseñadores de Insomnia. Todo lo que tienes que saber para poder hacer un buen trabajo.'
        />
        <Carta
          enlace='/guias/anfitriones'
          title='Guía de anfitriones'
          desc='Guía oficial de los anfitriones de Insomnia. Todo lo que necesitas aprender para ofrecer buena compañía, epectáculo y para no pasarte de la raya.'
        />
      </div>
    </>
  )
}