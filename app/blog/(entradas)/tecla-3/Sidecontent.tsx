import { perfiles } from "../../../Perfiles";
import Sidebar from "@/components/treecols/Sidebar";
import LiPerfil from "@/components/LiPerfil";

const encargados = perfiles.filter((obj) =>
  obj.usuario === "Anfitrion" || obj.usuario === "Nic0_Mongrant" || obj.usuario === "Caian"
);

export default function Sidecontent() {
  return (
    <Sidebar>
      <>
        <div className="col-span-12">
          <p className="text-yellow-300 text-lg font-semibold">
            Personal a cargo de este proyecto
          </p>
        </div>
        {encargados.map(perfil => {
          return (
            <div className="col-span-10">
              <LiPerfil 
                img_src={perfil.img_src}
                usuario={perfil.usuario}
                cargo={perfil.cargo}
                perfil={perfil.usuario_simple}
              />
            </div>
          )
        })}
      </>
    </Sidebar>
  );
}
