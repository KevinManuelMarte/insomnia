import Tarjeta from "../Tarjeta";
import { HiOutlineCube } from "react-icons/hi";
import { BsShieldPlus } from "react-icons/bs";
import Container from "@/components/Container";

export default function Page() {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-x-4">
        <div className="md:col-span-4 col-span-12">
          <Tarjeta
            className="mb-4"
            enlace="/blog/tecla-3-avance"
            titulo="Tecla 3 - Avance"
            subtitulo="Publicacion activa"
            desc="Presentamos algunas zonas del vestíbulo de Tecla 3"
          >
            <HiOutlineCube />
          </Tarjeta>
        </div>
        <div className="md:col-span-4 col-span-12">
          <Tarjeta
            className="mb-4"
            enlace="/blog/tecla-3"
            titulo="Tecla 3"
            subtitulo="Publicación activa"
            desc="Un servidor amistoso de Minecraft en modo supervivencia."
          >
            <HiOutlineCube />
          </Tarjeta>
        </div>
        <div className="md:col-span-4 col-span-12">
          <Tarjeta
            className="mb-4"
            enlace="/blog/se-busca-personal"
            titulo="Se busca personal"
            subtitulo="Publicación activa"
            desc="Aplica para ser un miembro del personal."
          >
            <BsShieldPlus />
          </Tarjeta>
        </div>
      </div>
    </Container>
  );
}
