import { BsXCircle, BsCheckCircle, BsMemory, BsPerson, BsCpu } from 'react-icons/bs'
import { RxCube } from 'react-icons/rx'
import { TbBucket } from 'react-icons/tb'
import { BiWorld } from 'react-icons/bi'
import Invitacion from '../Invitacion'

export default function Page() {
  return (
    <>
      <div className='grid grid-cols-12 py-8'>
        <div className='xl:col-start-2 col-start-2 xl:col-span-10 col-span-10'>
          <div className='grid grid-cols-10'>
            <div className='col-span-10'>
              <div className='grid grid-cols-10 items-center'>
                <div className='col-span-6 col-start-3'>
                  <h1 className='text-yellow-300 text-4xl font-semibold text-center leading-relaxed'>Tecla 3</h1>
                </div>
                <div className='col-span-2'>
                  <p className='text-neutral-300/90 text-right'>
                    17/5/2023
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-10 border-b border-yellow-300/80 mb-4' ></div>
            <div className='xl:col-span-10 col-span-10'>
              <p className='text-white leading-relaxed text-xl'>
                Nos complace anunciar el regreso esta serie de servidores de Minecraft. Tecla regresa con su tercera edición, esta vez en la versión de Minecraft 1.20.
              </p>
            </div>
            <div className='xl:col-span-10 col-span-10'>
              <h1 className='text-yellow-300 text-2xl font-semibold text-center leading-relaxed'>
                ¿De que tratará?
              </h1>
            </div>
            <div className='xl:col-span-10 col-span-10'>
              <p className='text-white leading-relaxed text-xl'>
                Este será un servidor amistoso en modo supervivencia semi vanilla, que organizará varios eventos. Es necesario estar en un equipo para participar en los eventos creados por los administradores, sin embargo, no para los eventos creados por los usuarios.
              </p>
            </div>
            <div className='xl:col-span-5 lg:col-span-5 col-span-10 pt-4'>
              <h1 className='text-yellow-300 text-2xl font-semibold leading-relaxed flex items-center'>
                <BsXCircle className='mr-2' />
                Lo que no se permite
              </h1>
              <ul className='list-decimal list-inside text-white leading-relaxed text-lg'>
                <li>Usar cualquier clase de programa o cliente modificado (hacks) para obtener venta injustamente.</li>
                <li>Matar a los jugadores, no importa el motivo.</li>
                <li>Manipular las estructuras de otros jugadores.</li>
                <li>Robar a otro jugadores.</li>
                <li>Usar bugs de duplicación de inventario.</li>
                <li>Ser tóxico con cualquier jugador.</li>
              </ul>
            </div>
            <div className='xl:col-span-5 lg:col-span-5 col-span-10 pt-4'>
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
          <div className='xl:col-span-10 col-span-10'>
            <h1 className='text-yellow-300 text-2xl font-semibold leading-relaxed text-center mt-4'>Características del servidor</h1>
          </div>
          <div className='xl:col-span-10 col-span-10'>
            <div className='grid xl:grid-cols-9 lg:grid-cols-6 md:grid-cols-6 grid-cols-9'>
              <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-9 flex items-center leading-relaxed text-xl'>
                <BsMemory className='text-yellow-300' />
                <p className='text-yellow-300 font-semibold mx-2'>Memoria del servidor:</p>
                <p className='text-white'>2GB</p>
              </div>
              <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-9 flex items-center leading-relaxed text-xl'>
                <BsPerson className='text-yellow-300' />
                <p className='text-yellow-300 font-semibold mx-2'>Máximos jugadores en línea:</p>
                <p className='text-white'>10</p>
              </div>
              <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-9 flex items-center leading-relaxed text-xl'>
                <RxCube className='text-yellow-300' />
                <p className='text-yellow-300 font-semibold mx-2'>Versión del juego:</p>
                <p className='text-white'>1.20</p>
              </div>
              <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-9 flex items-center leading-relaxed text-xl'>
                <TbBucket className='text-yellow-300' />
                <p className='text-yellow-300 font-semibold mx-2'>Jugabilidad:</p>
                <p className='text-white'>Semi-vanilla</p>
              </div>
              <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-9 flex items-center leading-relaxed text-xl'>
                <BsCpu className='text-yellow-300' />
                <p className='text-yellow-300 font-semibold mx-2'>Cpu:</p>
                <p className='text-white'>2 núcleos</p>
              </div>
              <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-9 flex items-center leading-relaxed text-xl'>
                <BiWorld className='text-yellow-300' />
                <p className='text-yellow-300 font-semibold mx-2'>Ubicación del servidor:</p>
                <p className='text-white'>Canadá</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-8'>
            <div className='xl:col-span-4 lg:col-span-4 col-span-8 xl:col-start-3 lg:col-start-3 pt-12'>
              <Invitacion/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}