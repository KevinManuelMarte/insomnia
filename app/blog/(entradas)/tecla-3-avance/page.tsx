import { Parrafo, Titulo1, Titulo3 } from "@/Mini";
import Midcol from "@/components/treecols/Midcol";
import Image from "next/image";
import Sidecontent from "./Sidecontent";

export default function Page() {
  return (
    <>
      <Midcol>
        <>
          <div className="col-span-12">
            <Titulo1 className="text-yellow-300 text-center">
              El avance de Tecla 3
            </Titulo1>
            <Parrafo className="text-noche-100 pt-4">
              A continuación les presentamos el progreso que lleva el vestíbulo
              del futuro servidor amistoso de Minecraft, Tecla 3.
            </Parrafo>
          </div>
          <div className="2xl:col-span-6 col-span-12">
            <Titulo3 className="text-ocaso-300 text-center pb-2">
              Aquí comienza esta aventura
            </Titulo3>
            <Image
              className="rounded-xl"
              src="https://media.discordapp.net/attachments/1032516925617614878/1113577938705723453/huge_2023-05-31_14.33.35.png"
              height={1024}
              width={1024}
              quality={100}
              alt="Avance"
            />
          </div>
          <div className="2xl:col-span-6 col-span-12">
            <Titulo3 className="text-ocaso-300 text-center pb-2">
              ¿A donde lleva esto?
            </Titulo3>
            <Image
              className="rounded-xl"
              src="https://media.discordapp.net/attachments/1032516925617614878/1113577939238391879/huge_2023-05-31_14.35.03.png"
              height={1024}
              width={1024}
              quality={100}
              alt="Avance"
            />
          </div>
          <div className="2xl:col-span-6 col-span-12">
            <Titulo3 className="text-ocaso-300 text-center pb-2">
              Tengo un mal presentimiento...
            </Titulo3>
            <Image
              className="rounded-xl"
              src="https://media.discordapp.net/attachments/1032516925617614878/1113577939741704313/huge_2023-05-31_14.35.43.png"
              height={1024}
              width={1024}
              quality={100}
              alt="Avance"
            />
          </div>
          <div className="2xl:col-span-6 col-span-12">
            <Titulo3 className="text-ocaso-300 text-center pb-2">
              (o.O)
            </Titulo3>
            <Image
              className="rounded-xl"
              src="https://media.discordapp.net/attachments/1032516925617614878/1113577940421193778/huge_2023-05-31_14.36.24.png"
              height={1024}
              width={1024}
              quality={100}
              alt="Avance"
            />
          </div>
        </>
      </Midcol>
      <Sidecontent />
    </>
  );
}
