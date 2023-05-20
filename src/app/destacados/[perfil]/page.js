import Distincion from '@/app/Distincion'
import { perfiles } from '@/app/Perfiles'
import Image from 'next/image'
import { BsYoutube, BsReddit, BsTwitter, BsGithub } from 'react-icons/bs'

export default function Page({ params }) {
  const parametros = [ params ]
  const parametro = parametros.map(parametros => { return parametros.perfil})
  const paramet = parametro.toString()
  const param = perfiles.filter(perfil => perfil.usuario === paramet)
  return (
    <div className="mx-16 my-8 p-16 bg-noche-700/20 rounded-lg">
      {param.map(perfil => {
        return (
          <div className="grid grid-cols-12" key={perfil.usuario}>
            <div className="col-span-10">
              <div className="flex items-center gap-2">
                <h1 className='text-4xl text-noche-100'>{perfil.usuario}</h1>
                <Distincion className='text-lg px-2' tipo={perfil.distincion} />
              </div>
              <span className='text-noche-300 text-xl'>{perfil.cargo}</span>
            </div>
            <div className="col-span-2 row-span-2">
              <Image className='rounded-lg' src={perfil.img_src} height={512} width={512} quality={100} alt={`Imagen de perfil de ${perfil.usuario}`} />
            </div>
            <div className="col-span-10">
              <p className="text-xl text-noche-200 leading-relaxed py-4">{perfil.desc}</p>
            </div>
            <div className="col-span-6">
              <h1 className="text-3xl text-noche-100">Datos</h1>
              <ul className="list-none text-noche-300 text-xl">
                <li>Edad: {perfil.edad} años</li>
                <li>Nacionalidad: {perfil.nacionalidad}</li>
                <li>Discord: {perfil.discord}</li>
                <li></li>
              </ul>
            </div>
            <div className="col-span-6">
              {perfil.distinciones ? (
                <>
                  <h1 className="text-3xl text-noche-100 pb-2">Distinciones</h1>
                  <div className="flex flex-wrap gap-2">
                    {perfil.distinciones.map(distincion => {
                      return (
                        <Distincion className='py-1 px-2' tipo={distincion.distincion} key={perfil.usuario} />
                      )
                    })}
                  </div>
                </>
              ) : null}
            </div>
            {perfil.youtube || perfil.reddit || perfil.twitter || perfil.github ? (
              <div className="col-span-12">
                <h1 className="text-3xl text-noche-100 py-4 text-center">Redes sociales</h1>
                <div className="flex justify-evenly pt-4">
                  {perfil.youtube ? (
                    <a className='bg-noche-500/50 text-noche-100 hover:bg-red-500 hover:text-white text-3xl p-4 rounded-full duration-200' href={perfil.youtube} target='blank'>
                      <BsYoutube />
                    </a>
                  ) : null}
                  {perfil.reddit ? (
                    <a className='bg-noche-500/50 text-noche-100 hover:bg-orange-500 hover:text-white text-3xl p-4 rounded-full duration-200' href={perfil.reddit} target='blank'>
                      <BsReddit />
                    </a>
                  ) : null}
                  {perfil.twitter ? (
                    <a className='bg-noche-500/50 text-noche-100 hover:bg-blue-500 hover:text-white text-3xl p-4 rounded-full duration-200' href={perfil.twitter} target='blank'>
                      <BsTwitter />
                    </a>
                  ) : null}
                  {perfil.github ? (
                    <a className='bg-noche-500/50 text-noche-100 hover:bg-slate-900 hover:text-white text-3xl p-4 rounded-full duration-200' href={perfil.github} target='blank'>
                      <BsGithub />
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )  
}