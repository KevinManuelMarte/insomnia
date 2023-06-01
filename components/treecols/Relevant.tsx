import { Subtitulo, Titulo3 } from "@/Mini";
import Image from "next/image";
import Link from "next/link";

export default function Relevant() {
  return (
    <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-3 lg:block hidden">
      <div className="bg-ex-100 rounded-xl p-4">
        <Link href="/blog/tecla-3-avance/">
          <Subtitulo className="text-yellow-300 font-semibold">
            Relevante: Tecla 3 - Avance
          </Subtitulo>
          <Image
            className="rounded-xl mt-4"
            src="https://media.discordapp.net/attachments/1032516925617614878/1113577938705723453/huge_2023-05-31_14.33.35.png"
            height={512}
            width={512}
            quality={100}
            alt="Avance"
          />
        </Link>
      </div>
    </div>
  );
}
