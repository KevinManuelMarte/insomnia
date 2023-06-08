import Distincion from "../../Distincion";
import { perfiles } from "../../Perfiles";
import Image from "next/image";
import { BsGithub, BsReddit, BsTwitter, BsYoutube } from "react-icons/bs";
import { Lista, Parrafo, Subtitulo, Titulo1, Titulo2 } from "../../Mini";
import Container from "@/components/Container";
import Boton from "@/components/Boton";

export default function Page({ params }) {
  const parametros = [params];
  const parametro = parametros.map((parametros) => {
    return parametros.perfil;
  });
  const paramet = parametro.toString();
  const param = perfiles.filter((perfil) => perfil.usuario_simple === paramet);
  return (
    <Container>
      <>
        {param.map((perfil) => {
          return (
            <div
              className="xl:p-16 lg:p-8 md:p-4 p-2 bg-noche-700/20 rounded-lg"
              key={perfil.usuario}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-10 col-span-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <Titulo1 className="text-noche-100">
                      {perfil.usuario}
                    </Titulo1>
                    <Distincion
                      className="lg:text-xl md:text-md text-sm px-2"
                      tipo={perfil.distincion}
                    />
                  </div>
                  <Subtitulo className="text-noche-300">
                    {perfil.cargo}
                  </Subtitulo>
                </div>
                <div className="md:col-span-2 col-span-12  md:row-span-2">
                  <Image
                    className="rounded-lg"
                    src={perfil.img_src}
                    height={512}
                    width={512}
                    quality={100}
                    alt={`Imagen de perfil de ${perfil.usuario}`}
                  />
                </div>
                <div className="md:col-span-10 col-span-12">
                  <Parrafo className="text-noche-200">
                    {perfil.desc}
                  </Parrafo>
                </div>
                <div className="md:col-span-6 col-span-12">
                  <Titulo2 className="text-noche-100">Datos</Titulo2>
                  <Lista className="text-noche-300">
                    <li>Edad: {perfil.edad} años</li>
                    <li>Nacionalidad: {perfil.nacionalidad}</li>
                    <li>Discord: {perfil.discord}</li>
                    <li></li>
                  </Lista>
                </div>
                <div className="md:col-span-6 col-span-12">
                  {perfil.distinciones
                    ? (
                      <>
                        <Titulo2 className="text-noche-100 pb-2">
                          Distinciones
                        </Titulo2>
                        <div className="flex flex-wrap gap-2">
                          {perfil.distinciones.map((distincion) => {
                            return (
                              <Distincion
                                className="lg:text-base md:text-md text-sm px-2"
                                tipo={distincion.distincion}
                                key={perfil.usuario}
                              />
                            );
                          })}
                        </div>
                      </>
                    )
                    : null}
                </div>
                {perfil.youtube || perfil.reddit || perfil.twitter ||
                    perfil.github
                  ? (
                    <div className="col-span-12">
                      <Titulo2 className="text-noche-100 text-center">
                        Redes sociales
                      </Titulo2>
                      <div className="flex justify-evenly py-8">
                        {perfil.youtube
                          ? (
                            <Boton color="red" href={perfil.youtube} text="n">
                              <BsYoutube className="text-2xl" />
                            </Boton>
                          )
                          : null}
                        {perfil.reddit
                          ? (
                            <Boton color="orange" href={perfil.reddit} text="n">
                              <BsReddit className="text-2xl" />
                            </Boton>
                          )
                          : null}
                        {perfil.twitter
                          ? (
                            <Boton color='sky' href={perfil.twitter} text='n'>
                              <BsTwitter className="text-2xl" />
                            </Boton>
                          )
                          : null}
                        {perfil.github
                          ? (
                           <Boton color='slate' href={perfil.github} text='n'>
                              <BsGithub className="text-2xl"/>
                            </Boton>
                          )
                          : null}
                      </div>
                    </div>
                  )
                  : null}
              </div>
            </div>
          );
        })}
      </>
    </Container>
  );
}
