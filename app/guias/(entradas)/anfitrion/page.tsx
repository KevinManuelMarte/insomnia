import { Parrafo, Titulo1 , Titulo2 } from "@/Mini";
import Table from "@/components/Table";
import Midcol from "@/components/treecols/Midcol";
import Sidecontent from "./Sidecontent";

export default function Page() {
  return (
    <>
      <Midcol>
        <>
          <div className="col-span-12">
            <Titulo1 className='text-yellow-300 text-center'>
              ¿Qué hace un anfitrión?
            </Titulo1>
            <Parrafo className="text-noche-100">
              Un anfitrión se encarga de recibir a los miembros nuevos del servidor, fomentar la actividad y animar los eventos.
            </Parrafo>
          </div>
          <div className="col-span-12">
            <Titulo2 className="text-yellow-300 text-center">
              Reglas de los anfitriones
            </Titulo2>
            <Parrafo className="text-noche-100">
              A continuación te presentamos las reglas que todo anfitrión de
              Insomnia debe seguir al pie de la letra.
            </Parrafo>
          </div>
          <Table>
            <>
              <tr>
                <th className="text-noche-200">
                  Debes ser muy tolerante con todos los usuarios
                </th>
                <th className="text-noche-200">
                  No debes crear conflictos
                </th>
              </tr>
              <tr>
                <th className="text-noche-200">
                  Debes ignorar a los usuarios que te caen mal
                </th>
                <th className="text-noche-200">
                  Tratarás de crear buen ambiente y humor en el servidor
                </th>
              </tr>
              <tr>
                <th className="text-noche-200">
                  Acudirás a los moderadores siempre que se presente algún problema
                </th>
                <th className="text-noche-200">
                  Debes ser activo
                </th>
              </tr>
            </>
          </Table>
        </>
      </Midcol>
      <Sidecontent/>
    </>
  );
}
