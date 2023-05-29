import Image from "next/image";
import Link from "next/link";
import Invitacion from "./Invitacion";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h3 className="text-noche-300 font-semibold lg:text-2xl md:text-xl text-lg text-center pt-2 pb-4">
            <Link href="/blog/se-busca-personal">
              Se busca personal!
            </Link>
          </h3>
        </div>
        <div className="md:col-span-10 col-span-12 md:col-start-2">
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-ocaso-500 to-noche-500">
            La comunidad que se dedica a sus miembros
          </h1>
        </div>
        <div className="md:col-span-8 col-span-12 md:col-start-3">
          <p className="lg:text-2xl md:text-xl text-base text-noche-300 text-center pb-4">
            El servidor de Insomnia es una comunidad virtual de discord en la
            cual muchos gamers se reunen para convivir de manera pacifica e
            integrada.
          </p>
        </div>
        <div className="2xl:col-span-4  md:col-span-6 col-span-12 2xl:col-start-5 md:col-start-4">
          <Invitacion subtitulo="Únete a nosotros y ayudanos a crear una mejor comunidad!" />
        </div>
      </div>
    </Container>
  );
}
