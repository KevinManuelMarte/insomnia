import { Parrafo, Titulo1, Titulo2 } from "@/Mini";
import Table from "@/components/Table";
import Midcol from "@/components/treecols/Midcol";
import Sidecontent from "./Sidecontent";

export default function Page() {
  return (
    <>
      <Midcol>
        <>
          <div className="col-span-12">
            <Titulo1 className="text-yellow-300 text-yellow-300 text-center">
              ¿Que hace un desarrollador?
            </Titulo1>
            <Parrafo className="text-noche-100">
              Un desarrollador se encarga de configurar el servidor de Discord
              de Insomnia, crear bots de Discord, trabajar en la página web,
              manejar bases de datos, crear y configurar servidores de
              Minecraft, etc.
            </Parrafo>
          </div>
          <div className="col-span-12">
            <Titulo2 className="text-yellow-300 text-center">
              Reglas de los desarrolladores
            </Titulo2>
            <Parrafo className="text-noche-100">
              A continuación te presentamos las reglas que todo desarrollador de
              Insomnia debe seguir al pie de la letra.
            </Parrafo>
          </div>
          <Table>
            <>
              <tr>
                <th className="text-noche-200">
                  Debes ser estar dispuesto a trabajar en equipo
                </th>
                <th className="text-noche-200">
                  No harás ningún cambio sin preguntar antes a un administrador
                </th>
              </tr>
              <tr>
                <th className="text-noche-200">
                  Debes tener conocimiento en NextJS, Laravel, SQL, Discord
                  (bots y configuración de servidores) y/o creación de
                  servidores de Minecraft
                </th>
                <th className="text-noche-200">
                  Tratarás de innovar constantemente
                </th>
              </tr>
              <tr>
                <th className="text-noche-200">
                  Comunícate activamente con los administradores para obtener un
                  buen resultado
                </th>
                <th className="text-noche-200">
                  Planifica el trabajo y trabaja el plan: Asegúrate de tener un
                  plan claro y bien definido para cada proyecto.
                </th>
              </tr>
            </>
          </Table>
          <div className="col-span-12">
            <Parrafo className="text-noche-100">
              Y recuerda que para tratar temas relacionados al desarrollo de
              proyectos en Insomnia, tienes disponible el canal
              <span className="bg-ocaso-400/40 px-2 py-1 rounded-full text-sm mx-1">
                <a
                  href="https://discord.com/channels/794809684905033768/1060642631249571861"
                  target="_blank"
                >
                  # 🤖・chat-desarrolladores
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
