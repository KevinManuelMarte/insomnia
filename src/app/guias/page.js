import Carta from './Carta';
import { BsShield, BsPerson, BsPalette } from 'react-icons/bs'
import { TbConfetti } from 'react-icons/tb'

export default function Guias() {
  return (
    <>
      <div className="mx-6">
        <div className='grid grid-cols-12 mt-8 gap-4'>
          <Carta
            enlace='/guias/moderación'
            title='Guía de moderación'
            desc='Guía oficial de moderación de Insomnia. Todo lo que necesitas aprender para ser moderador o,si eres un usuario, para prevenir abuso de poder.'
          >
            <BsShield />
          </Carta>
          <Carta
            enlace='/guias/usuarios'
            title='Guía de usuarios'
            desc='Guía oficial de los usuarios de Insomnia. Todo lo que tienes que saber para ser un buen usuario y ser considerado por el pride guardián.'
          >
            <BsPerson />
          </Carta>
          <Carta
            enlace='/guias/diseñadores'
            title='Guía de diseñadores'
            desc='Guía oficial de los diseñadores de Insomnia. Todo lo que tienes que saber para poder hacer un buen trabajo.'
          >
            <BsPalette />
          </Carta>
          <Carta
            enlace='/guias/anfitriones'
            title='Guía de anfitriones'
            desc='Guía oficial de los anfitriones de Insomnia. Todo lo que necesitas aprender para ofrecer buena compañía, epectáculo y para no pasarte de la raya.'
          >
            <TbConfetti />
          </Carta>
        </div>
      </div>
    </>
  )
}