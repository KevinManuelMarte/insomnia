import Image from "next/image";
import Link from "next/link";
import { perfiles } from "../../../Perfiles";
import Sidebar from "@/components/treecols/Sidebar";

const encargados = perfiles.filter((obj) =>
  obj.usuario === "Anfitrion" || obj.usuario === "Nic0_Mongrant"
);

export default function Sidecontent() {
  return (
    <Sidebar>
      <>
        <div className="col-span-12">
          <p className="text-yellow-300 text-lg font-semibold pb-4">
            Personal a cargo de este proyecto
          </p>
        </div>
        <div className="col-span-12">
          <div className="grid grid-cols-2 gap-4">
            {encargados.map((perfil) => {
              return (
                <div className="col-span-12">
                  <Link
                    className="flex justify-start items-center gap-2"
                    href={`/destacados/${perfil.usuario_simple}`}
                  >
                    <Image
                      className="w-1/6 rounded-full"
                      src={perfil.img_src}
                      height={128}
                      width={128}
                      alt={`Imagen de perfil de ${perfil.usuario}`}
                    />
                    <div className="w-5/6">
                      <p className="text-noche-100 font-semibold">
                        {perfil.usuario}
                      </p>
                      <p className="text-noche-200 text-sm">
                        {perfil.cargo}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </Sidebar>
  );
}
