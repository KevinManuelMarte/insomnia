import { Parrafo, Titulo1 } from "@/Mini";
import Midcol from "@/components/treecols/Midcol";
import Sidecontent from "./Sidecontent";
import Table from "@/components/Table";

export default function Page() {
  return (
    <>
      <Midcol>
        <>
          <div className="col-span-12">
            <Titulo1 className="text-yellow-300 text-center">
              Guía para los moderadores
            </Titulo1>
            <Parrafo className="text-noche-100 pt-4 ">
              A continuación te presentamos las reglas que todo moderador de
              Insomnia debe seguir al pie de la letra.
            </Parrafo>
          </div>
          <div className="col-span-12">
            <Table>
              <>
                <tr>
                  <th className="text-noche-200">
                    Mantener una buena comunicación dentro del equipo de
                    moderación y con la comuynidad del servidor en Discord
                  </th>
                  <th className="text-noche-200">
                    Ser respetuoso y profesional en todo momento, incluso si se
                    trata de un problema complicado
                  </th>
                </tr>
                <tr>
                  <th className="text-noche-200">
                    Ser imparcial y objetivo al tomar decisiones en términos de
                    moderación y disciplinas
                  </th>
                  <th className="text-noche-200">
                    Ser empático y comprensivo con la comunidad del servidor y
                    con los usuarios que tienen problemas o necesitan ayuda
                  </th>
                </tr>
                <tr>
                  <th className="text-noche-200">
                    Ser transparentes en términos de decisiones y aciones de
                    moderación
                  </th>
                  <th className="text-noche-200">
                    Ser capaz de trabajar en equipo y comunicarse eficientemente
                    sobre los problemas y soluciones
                  </th>
                </tr>
                <tr>
                  <th className="text-noche-200">
                    Mantener la armonía dentro del servidor y con todos los
                    usuarios
                  </th>
                  <th className="text-noche-200">
                    No abusar de su poder y no tomar decisiones que benecifien
                    solo a uno mismo o a su grupo
                  </th>
                </tr>
                <tr>
                  <th className="text-noche-200">
                    No favoritismos de ningún tipo, ser justo en todos los tipos
                    de moderación
                  </th>
                  <th className="text-noche-200">
                    No tomar decisiones a la ligera y tratar de entender todos
                    los puntos de vista
                  </th>
                </tr>
              </>
            </Table>
          </div>
          <div className="col-span-12">
            <Titulo1 className="text-yellow-300 text-center">
              Reglas de sanciones
            </Titulo1>
            <Parrafo className="text-noche-100 pt-4">
              Estas son las reglas para aplicar las sanciones. Todo moderador,
              sin importar que tanto rango tenga, deberá seguir estas reglas.
              Estas reglas solo aplican para el intervalo de 1 día. Crear un
              tique de reporte si algún moderador esta cumpliendo mal su
              trabajo. Si algún usuario recibe 3 advertencias en 1 día será
              aislado 1 semana. Si recibe 7 advertencias en menos de 1 mes será
              baneado.
            </Parrafo>
          </div>
          <table className="col-span-12 text-left border-separate lg:border-spacing-4 border-spacing-2 border border-noche-700 rounded-lg md:text-base text-sm">
            <thead>
              <tr className="text-noche-100">
                <th>Infracción</th>
                <th>Primera acción</th>
                <th>Si se repite</th>
                <th>Se se vuelve a repetir</th>
              </tr>
            </thead>
            <tbody className="text-noche-200">
              <tr>
                <th>Inundación de mensajes</th>
                <th>Advertir al usuario</th>
                <th>Advertir al usuario</th>
                <th>Aislar 1 día</th>
              </tr>
              <tr>
                <th>Spam al md</th>
                <th>Banear al usuario</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Compartir contenido no seguro</th>
                <th>Banear al usuario</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Mandar muros de texto</th>
                <th>Advertir al usuario</th>
                <th>Advertir al usuario</th>
                <th>Aislar 1 día</th>
              </tr>
              <tr>
                <th>Promover el bullying</th>
                <th>Advertir al usuario</th>
                <th>Expular al usuario</th>
                <th>Banear al usuario</th>
              </tr>
              <tr>
                <th>Promover la piratería</th>
                <th>Advertir al usuario</th>
                <th>Advertir al usuario</th>
                <th>Silenciar 1 día</th>
              </tr>
              <tr>
                <th>Promover el racismo</th>
                <th>Advertir al usuario</th>
                <th>Silenciar 1 hora</th>
                <th>Silenciar 1 día</th>
              </tr>
              <tr>
                <th>Promover la homofobia</th>
                <th>Advertir al usuario</th>
                <th>Silenciar 1 hora</th>
                <th>Silenciar 1 día</th>
              </tr>
              <tr>
                <th>Compartir links maliciosos</th>
                <th>Expulsar al usuario</th>
                <th>Banear al usuario</th>
                <th></th>
              </tr>
              <tr>
                <th>Incumplir los terminos de servicio de Discord</th>
                <th>Banear al usuario</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Hacer ruidos molestos</th>
                <th>Advertir al usuario</th>
                <th>Silenciar al usuario 1 hora</th>
                <th>Silenciar al usuario 1 día</th>
              </tr>
              <tr>
                <th>Entrar con multicuentas</th>
                <th>Banear a la multicuenta</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Tratar temas delicados</th>
                <th>Advertir verbalmente</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Insultar a otros usuarios</th>
                <th>Advertir</th>
                <th>Advertir</th>
                <th>Silencia 1 hora</th>
              </tr>
            </tbody>
          </table>
        </>
      </Midcol>
      <Sidecontent />
    </>
  );
}
