import { perfiles } from "../Perfiles";
import Tarjeta from "../Tarjeta";
import Container from "@/components/Container";

export default function Page() {
  return (
    <Container>
      <div className="grid grid-cols-3  gap-4">
        {perfiles.map((perfil, idx) => {
          return (
            <Tarjeta
              key={perfil.usuario_simple}
              className={(idx === 0) || (idx === 2)
                ? `row-span-1`
                : `row-span-2`}
              enlace={`/destacados/${perfil.usuario_simple}`}
              titulo={perfil.usuario}
              distincion={perfil.distincion}
              img_src={perfil.img_src}
              subtitulo={perfil.cargo}
              desc={perfil.desc}
            />
          );
        })}
      </div>
    </Container>
  );
}
