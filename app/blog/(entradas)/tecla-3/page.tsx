import {
  BsCheckCircle,
  BsCpu,
  BsMemory,
  BsPerson,
  BsXCircle,
} from "react-icons/bs";
import { RxCube } from "react-icons/rx";
import { TbBucket } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import Invitacion from "../../../Invitacion";
import { Parrafo, Subtitulo, Titulo1, Titulo2 } from "../../../Mini";
import Sidecontent from "./Sidecontent";
import Container from "@/components/treecols/Container";

export default function Page() {
  return (
    <>
      <Container>
        <>
          <div className="col-span-12">
            <Titulo1 className="text-yellow-300 text-center">
              Tecla 3
            </Titulo1>
            <Parrafo className="text-noche-100 leading-relaxed">
              Nos complace anunciar el regreso esta serie de servidores de
              Minecraft. Tecla regresa con su tercera edición, esta vez en la
              versión de Minecraft 1.20.
            </Parrafo>
          </div>
          <div className="col-span-12">
            <Titulo2 className="text-yellow-300 text-center">
              ¿De qué tratará?
            </Titulo2>
            <Parrafo className="text-noche-100">
              Este será un servidor amistoso en modo supervivencia semi vanilla,
              que organizará varios eventos. Es necesario estar en un equipo
              para participar en los eventos creados por los administradores,
              sin embargo, no para los eventos creados por los usuarios.
            </Parrafo>
          </div>
          <div className="md:col-span-6 col-span-12">
            <h1 className="text-yellow-300 lg:text-2xl md:text-2xl text-xl font-semibold text-center lg:leading-relaxed md:leading-relaxed leading-relaxed flex items-center gap-2">
              <BsXCircle />
              Lo que no se permite
            </h1>
            <ul className="list-decimal list-inside text-noche-200 2xl:text-lg lg:text-base text-sm leading-relaxed">
              <li>
                Usar cualquier clase de programa o cliente modificado (hacks)
                para obtener venta injustamente.
              </li>
              <li>Matar a los jugadores, no importa el motivo.</li>
              <li>Manipular las estructuras de otros jugadores.</li>
              <li>Robar a otro jugadores.</li>
              <li>Usar bugs de duplicación de inventario.</li>
              <li>Ser tóxico con cualquier jugador.</li>
            </ul>
          </div>
          <div className="md:col-span-6 col-span-12">
            <h1 className="text-yellow-300 lg:text-2xl md:text-2xl text-xl font-semibold text-center lg:leading-relaxed md:leading-relaxed leading-relaxed flex items-center gap-2">
              <BsCheckCircle />
              Lo que se permite
            </h1>
            <ul className="list-decimal list-inside text-noche-200 2xl:text-lg lg:text-base text-sm leading-relaxed">
              <li>
                Usar mods de: minimapa, interfaz de información, interfaz de
                objetos, optimización, decoración y arreglo de bugs.
              </li>
              <li>Formar alianzas entre equipo.</li>
              <li>Acordar duelos a muerte con otros jugadores/equipos.</li>
              <li>Saltarte algunas reglas para hacer una broma NO DAÑINA.</li>
              <li>No participar en los eventos.</li>
              <li>
                Usar bugs de duplicación de tnt, arena, grava y alfombras.
              </li>
            </ul>
          </div>
          <div className="col-span-12">
            <Titulo2 className="text-yellow-300 text-center">
              Caracteristicas del servidor
            </Titulo2>
            <div className="flex flex-wrap gap-x-4">
              <div className="flex items-center md:text-lg text-sm">
                <BsMemory className="text-ocaso-300" />
                <p className="text-ocaso-300 font-semibold mx-2">
                  Memoria del servidor:
                </p>
                <p className="text-noche-100">2GB</p>
              </div>
              <div className="flex items-center md:text-lg text-sm">
                <BsPerson className="text-ocaso-300" />
                <p className="text-ocaso-300 font-semibold mx-2">
                  Máximos jugadores en línea:
                </p>
                <p className="text-noche-100">10</p>
              </div>
              <div className="flex items-center md:text-lg text-sm">
                <RxCube className="text-ocaso-300" />
                <p className="text-ocaso-300 font-semibold mx-2">
                  Versión del juego:
                </p>
                <p className="text-noche-100">1.20</p>
              </div>
              <div className="flex items-center md:text-lg text-sm">
                <TbBucket className="text-ocaso-300" />
                <p className="text-ocaso-300 font-semibold mx-2">
                  Jugabilidad:
                </p>
                <p className="text-noche-100">Semi-vanilla</p>
              </div>
              <div className="flex items-center md:text-lg text-sm">
                <BsCpu className="text-ocaso-300" />
                <p className="text-ocaso-300 font-semibold mx-2">Cpu:</p>
                <p className="text-noche-100">2 Núcleos</p>
              </div>
              <div className="flex items-center md:text-lg text-sm">
                <BiWorld className="text-ocaso-300" />
                <p className="text-ocaso-300 font-semibold mx-2">
                  Ubicación del servidor:
                </p>
                <p className="text-noche-100">Canadá</p>
              </div>
            </div>
          </div>
          <div className="2xl:col-span-6 2xl:col-start-4 md:col-span-12 col-span-12">
            <Invitacion subtitulo="¡Únete a Insomnia para disfrutar de este evento!" />
          </div>
        </>
      </Container>
      <Sidecontent />
    </>
  );
}
