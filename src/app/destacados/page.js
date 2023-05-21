import Tarjeta from '../Tarjeta';
import { perfiles } from '../Perfiles'

const col1 = perfiles.filter(perfil => perfil.columna === 1)
const col2 = perfiles.filter(perfil => perfil.columna === 2)
const col3 = perfiles.filter(perfil => perfil.columna === 3)

export default function Destacados() {
  return (
    <>
			<div className="my-4 xl:mx-16 mx-4">
				<div className="grid grid-cols-12">
					<div className="lg:col-span-4 col-span-12">
							{col1.map(perfil => {
								return (
									<Tarjeta
										className='p-2'
										enlace={`/destacados/${perfil.usuario}`}
										key={perfil.usuario}
										titulo={perfil.usuario}
										distincion={perfil.distincion}
										subtitulo={perfil.cargo}
										img_src={perfil.img_src}
										img_alt={`Imagen de perfil de ${perfil.usuario}`}
										desc={perfil.desc}
									/>
								)
							})}
					</div>		
					<div className="lg:col-span-4 col-span-12">
						<ul className='list-none'>
							{col2.map(perfil => {
								return (
									<Tarjeta
										className='p-2'
										enlace={`/destacados/${perfil.usuario}`}
										key={perfil.usuario}
										titulo={perfil.usuario}
										distincion={perfil.distincion}
										subtitulo={perfil.cargo}
										img_src={perfil.img_src}
										img_alt={`Imagen de perfil de ${perfil.usuario}`}
										desc={perfil.desc}
									/>
								)
							})}
						</ul>
					</div>		
					<div className="lg:col-span-4 col-span-12">
						<ul className='list-none'>
							{col3.map(perfil => {
								return (
									<Tarjeta
										className='p-2'
										enlace={`/destacados/${perfil.usuario}`}
										key={perfil.usuario}
										titulo={perfil.usuario}
										distincion={perfil.distincion}
										subtitulo={perfil.cargo}
										img_src={perfil.img_src}
										img_alt={`Imagen de perfil de ${perfil.usuario}`}
										desc={perfil.desc}
									/>
								)
							})}
						</ul>
					</div>		
				</div>
			</div>
    </>
  )
}

export const metadata = {
  title: 'Destacados - Insomnia',
};