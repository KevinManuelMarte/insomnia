import { BsXCircle, BsCheckCircle, BsMemory, BsPerson, BsCpu } from 'react-icons/bs'
import { RxCube } from 'react-icons/rx'
import { TbBucket } from 'react-icons/tb'
import { BiWorld } from 'react-icons/bi'
import Invitacion from '../../Invitacion'
import { perfiles } from '../../Perfiles'
import Tarjeta from '../../Tarjeta'

const encargados = perfiles.filter((perfil) => {
  const { usuario } = perfil;
  return ['Anfitrion', 'Nic0_Mongrant'].includes(usuario);
})

export default function Page() {
  return (
    <>
      <div className='my-8 lg:mx-16 mx-4'>
        <div className='grid grid-cols-12'>
          <div className="col-start-5 col-span-4">
            <h1 className='text-yellow-300 md:text-4xl text-3xl font-semibold text-center md:leading-relaxed leading-relaxed'>Tecla 3</h1>
          </div>
          <div className="col-start-10 col-span-3">
            <p className='text-neutral-300/90 text-right'>
              17/5/2023
            </p>
          </div>
          <div className="col-span-12 border-b border-yellow-300/90"></div>
          <div className="col-span-12">
            <p className='text-white leading-relaxed text-lg py-4'>
              Nos complace anunciar el regreso esta serie de servidores de Minecraft. Tecla regresa con su tercera edición, esta vez en la versión de Minecraft 1.20.
            </p>
          </div>
          <div className="col-span-12">
            <h1 className='text-yellow-300 text-2xl font-semibold text-center leading-relaxed'>
              ¿De que tratará?
            </h1>
          </div>
          <div className="col-span-12">
            <p className='text-white leading-relaxed text-lg pb-8'>
              Este será un servidor amistoso en modo supervivencia semi vanilla, que organizará varios eventos. Es necesario estar en un equipo para participar en los eventos creados por los administradores, sin embargo, no para los eventos creados por los usuarios.
            </p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <div className="mb-4">
              <h1 className='text-yellow-300 text-2xl font-semibold leading-relaxed flex items-center'>
                <BsXCircle className='mr-2' />
                Lo que no se permite
              </h1>
              <ul className='list-decimal list-inside text-white leading-relaxed text-lg pr-2'>
                <li>Usar cualquier clase de programa o cliente modificado (hacks) para obtener venta injustamente.</li>
                <li>Matar a los jugadores, no importa el motivo.</li>
                <li>Manipular las estructuras de otros jugadores.</li>
                <li>Robar a otro jugadores.</li>
                <li>Usar bugs de duplicación de inventario.</li>
                <li>Ser tóxico con cualquier jugador.</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <div className="mb-4">
              <h1 className='text-yellow-300 text-2xl font-semibold leading-relaxed flex items-center'>
                <BsCheckCircle className='mr-2' />
                Lo que se permite
              </h1>
              <ul className='list-decimal list-inside text-white leading-relaxed text-lg'>
                <li>Usar mods de: minimapa, interfaz de información, interfaz de objetos, optimización, decoración y arreglo de bugs.</li>
                <li>Formar alianzas entre equipo.</li>
                <li>Acordar duelos a muerte con otros jugadores/equipos.</li>
                <li>Saltarte algunas reglas para hacer una broma NO DAÑINA.</li>
                <li>No participar en los eventos.</li>
                <li>Usar bugs de duplicación de tnt, arena, grava y alfombras.</li>
              </ul>
            </div>
          </div>
          <div className="col-span-12">
            <h1 className='text-yellow-300 text-2xl font-semibold leading-relaxed text-center'>Características del servidor</h1>
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="flex items-center text-lg">
              <BsMemory className='text-yellow-300' />
              <p className='text-yellow-300 font-semibold mx-2'>Memoria del servidor:</p>
              <p className='text-white'>2GB</p>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="flex items-center text-lg">
              <BsPerson className='text-yellow-300' />
              <p className='text-yellow-300 font-semibold mx-2'>Máximos jugadores en línea:</p>
              <p className='text-white'>10</p>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="flex items-center text-lg">
              <RxCube className='text-yellow-300' />
              <p className='text-yellow-300 font-semibold mx-2'>Versión del juego:</p>
              <p className='text-white'>1.20</p>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="flex items-center text-lg">
              <TbBucket className='text-yellow-300' />
              <p className='text-yellow-300 font-semibold mx-2'>Jugabilidad:</p>
              <p className='text-white'>Semi-vanilla</p>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="flex items-center text-lg">
              <BsCpu className='text-yellow-300' />
              <p className='text-yellow-300 font-semibold mx-2'>Cpu:</p>
              <p className='text-white'>2 núcleos</p>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="flex items-center text-lg">
              <BiWorld className='text-yellow-300' />
              <p className='text-yellow-300 font-semibold mx-2'>Ubicación del servidor:</p>
              <p className='text-white'>Canadá</p>
            </div>
          </div>
          <div className="col-span-12">
            <h1 className="text-2xl text-yellow-300 font-semibold text-center py-4">Personal a cargo de este servidor</h1>
          </div>
          {encargados.map(perfil => {
            return (
              <div className="md:col-span-6 col-span-12" key={perfil.usuario}>
                <ul className="list-none">
                  <Tarjeta
                    className='p-2'
                    enlace={`/destacados/${perfil.usuario}`}
                    key={perfil.usuario}
                    titulo={perfil.usuario}
                    distincion={perfil.distincion}
                    subtitulo={perfil.cargo}
                    img_src={perfil.img_src}
                    img_alt={`Imagen de perfil de ${perfil.usuario}`}
                  />
                </ul>
              </div>
            )
          })}
          <div className="md:col-start-4 md:col-span-6 col-span-12">
            <div className="py-8">
              <Invitacion />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}