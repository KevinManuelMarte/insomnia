import { Parrafo, Titulo1 } from "@/Mini";
import Midcol from "@/components/treecols/Midcol";
import Sidecontent from "./Sidecontent";

export default function Page() {
  return (
    <>
      <Midcol>
        <>
        <div className="col-span-12">
          <Titulo1 className="text-yellow-300 text-center">
            ¿Que hacen los diseñadores?
          </Titulo1>
          <Parrafo className="text-noche-100 pt-4">
            Los diseñadores de Insomnia son aquellos que se encargan de diseñar
            los logos, imágenes, construcciones de Minecraft, renderizados, etc.
            Básicamente, se encargan de diseñar todo el estilo de Insomnia.
          </Parrafo>
        </div>
        <div className="col-span-12">
          <Titulo1 className="text-yellow-300 text-center">
            Reglas de los diseñadores
          </Titulo1>
          <Parrafo className="text-noche-100 pt-4 ">
            A continuación te presentamos las reglas que todo diseñador de
            Insomnia debe seguir al pie de la letra.
          </Parrafo>
        </div>
        <table className="col-span-12 text-left border-separate lg:border-spacing-4 border-spacing-2 border border-noche-700 rounded-lg md:text-base text-sm text-noche-100">
          <tr>
            <th>Debes ser tolerante a la crítica</th>
            <th>Trataras de innovar constantemente</th>
          </tr>
          <tr>
            <th>No COPIARÁS diseños ajenos</th>
            <th>Serás flexible a los cambios que se te pidan</th>
          </tr>
          <tr>
            <th>No presentarás trabajos mediocres como producto final</th>
            <th>Debes estar abierto a la posibilidad de trabajar en equipo</th>
          </tr>
        </table>
        </>
      </Midcol>
      <Sidecontent />
    </>
  );
}
