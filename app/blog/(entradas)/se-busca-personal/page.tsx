import Tarjeta from "../../../Tarjeta";
import { BsBriefcase, BsNewspaper, BsShield } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import Invitacion from "../../../Invitacion";
import Midcol from "@/components/treecols/Midcol";
import { Parrafo, Titulo1, Titulo3 } from "app/Mini";
import Sidecontent from "./Sidecontent";

export default function Page() {
  return (
    <>
      <Midcol>
        <>
          <div className="col-span-12">
            <Titulo1 className="text-yellow-300 text-center">
              Se busca personal
            </Titulo1>
            <Parrafo className="text-noche-100">
              Insomnia está en busca de un equipo creativo para ayudarnos a
              mejorar nuestra comunidad. Únete a nuestro proyecto innovador y
              juntos llevaremos esta experiencia única al siguiente nivel.
            </Parrafo>
            <Titulo3 className="text-yellow-300 text-center pt-4">
              Necesitamos los siguientes roles
            </Titulo3>
          </div>
          <Tarjeta
            enlace="/guias/moderador"
            className="2xl:col-span-4 md:col-span-6 col-span-12"
            titulo="Moderador"
            subtitulo="Sin cupos disponibles"
            desc="Aquellos miembros del personal que se dedican a regular y moderar la actividad en el servidor."
          >
            <BsShield />
          </Tarjeta>
          <Tarjeta
            enlace=""
            className="2xl:col-span-4 md:col-span-6 col-span-12"
            titulo="Diseñador"
            subtitulo="2 cupos disponibles"
            desc="Los encargados del diseño gráfico, construcciones en Minecraft, edición de vídeos, etc."
          >
            <MdOutlineColorLens />
          </Tarjeta>
          <Tarjeta
            enlace=""
            className="2xl:col-span-4 md:col-span-6 col-span-12"
            titulo="Anfitrión"
            subtitulo="1 cupo disponibles"
            desc="El personal encargado de dar vida a la comunidad y fomentar la actividad entre los usuarios."
          >
            <BiMicrophone />
          </Tarjeta>
          <Tarjeta
            enlace=""
            className="2xl:col-span-4 md:col-span-6 col-span-12"
            titulo="Desarrollador"
            subtitulo="Sin cupos disponibles"
            desc="Miembros del personal cuya labor es prestar sus habilidades de programación para mantener la página de Insomnia y otras cosas."
          >
            <AiOutlineCode />
          </Tarjeta>
          <Tarjeta
            enlace=""
            className="2xl:col-span-4 md:col-span-6 col-span-12"
            titulo="Publicista"
            subtitulo="4 cupos disponibles"
            desc="El personal encargado de hacer publicidad de Insomnia en otros servidores (no spam)."
          >
            <BsBriefcase />
          </Tarjeta>
          <Tarjeta
            enlace=""
            className="2xl:col-span-4 md:col-span-6 col-span-12"
            titulo="Periodista"
            subtitulo="2 cupos disponibles"
            desc="Aquellos miembros del personal cuya labor es publicar información, hechos curiosos, novedades y diseños sobre ciertos temas relevantes en Insomnia."
          >
            <BsNewspaper />
          </Tarjeta>
          <div className="2xl:col-span-6 col-span-12 2xl:col-start-4">
            <Invitacion subtitulo="¡Únete a Insomnia para solicitar ser miembro del personal!" />
          </div>
        </>
      </Midcol>
      <Sidecontent />
    </>
  );
}
