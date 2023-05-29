import Link from "next/link";
import Image from "next/image";

interface Prope {
  perfil: string;
  img_src: string;
  usuario: string;
  cargo: string;
}

export default function LiPerfil(props: Prope): JSX.Element {
  return (
    <Link
      className="flex justify-start items-center gap-2"
      href={`/destacados/${props.perfil}`}
    >
      <Image
        className="w-1/6 rounded-full"
        src={props.img_src}
        height={128}
        width={128}
        alt={`Imagen de perfil de ${props.usuario}`}
      />
      <div className="w-5/6">
        <p className="text-noche-100 font-semibold">
          {props.usuario}
        </p>
        <p className="text-noche-200 text-sm">
          {props.cargo}
        </p>
      </div>
    </Link>
  );
}
