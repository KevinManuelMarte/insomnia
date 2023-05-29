import { Parrafo, Titulo1 } from "@/Mini";
import Table from "@/components/Table";
import Midcol from "@/components/treecols/Midcol";
import Sidecontent from "./Sidecontent";

export default function Page() {
  return (
    <>
      <Midcol>
        <>
          <div className="col-span-12">
            <Titulo1 className="text-yellow-300 text-center">
              Reglas de los publicistas
            </Titulo1>
            <Parrafo className="text-noche-100">
              A continuación te presentamos las reglas que todo publicista de
              Insomnia debe seguir al pie de la letra.
            </Parrafo>
          </div>
          <Table>
            <>
              <tr>
                <th className="text-noche-200">
                  Solo publicitarás nuestra comunidad en lugares permitidos.
                  Nada de hacer spam
                </th>
                <th className="text-noche-200">
                  No publicarás publicidad no aprobada previamente por un
                  administrador
                </th>
              </tr>
              <tr>
                <th className="text-noche-200">
                  No publicitarás nuestra comunidad en sitios no seguros para
                  todo público
                </th>
              </tr>
            </>
          </Table>
          <div className="col-span-12">
            <Parrafo className="text-noche-100">
              Y recuerda que para tratar temas relacionado a la publicidad de
              Insomnia, tienes disponible el canal
              <span className="bg-ocaso-400/40 px-2 py-1 rounded-full text-sm mx-1">
                <a href="1060438287694696559" target="_blank">
                  # 🎨・chat-diseñadores
                </a>
              </span>
            </Parrafo>
          </div>
        </>
      </Midcol>
      <Sidecontent />
    </>
  );
}
