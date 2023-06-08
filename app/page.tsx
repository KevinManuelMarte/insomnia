import Link from "next/link";
import Container from "@/components/Container";
import Boton from "@/components/Boton";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h3 className="text-teal-300 font-semibold lg:text-2xl md:text-xl text-lg text-center pt-2 pb-4">
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
          <p className="lg:text-2xl md:text-xl text-base text-noche-100 text-center pb-4">
            El servidor de Insomnia es una comunidad virtual de discord en la
            cual muchos gamers se reunen para convivir de manera pacifica e
            integrada.
          </p>
        </div>
        <div className="col-span-12">
          <div className="flex justify-center">
            <Boton color='noche' href="/" text="s">
              <p className="text-xl font-semibold">Únete</p>
            </Boton>
          </div>
        </div>
      </div>
    </Container>
  );
}
