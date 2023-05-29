import Sidebar from "@/components/treecols/Sidebar";
import { perfiles } from "@/Perfiles";
import LiPerfil from "@/components/LiPerfil";

const personal = perfiles.filter((perfil) =>
  perfil.distinciones.some((distincion) => distincion.distincion == 12)
);

export default function Sidecontent(): JSX.Element {
  return (
    <Sidebar>
      <>
        <div className="col-span-12">
          <p className="text-yellow-300 text-lg font-semibold pb-4">
            Miembros del personal
          </p>
        </div>
        {personal.map((perfil) => {
          return (
            <div className="col-span-10">
              <LiPerfil
                perfil={perfil.usuario}
                img_src={perfil.img_src}
                usuario={perfil.usuario}
                cargo={perfil.cargo}
              />
            </div>
          );
        })}
      </>
    </Sidebar>
  );
}