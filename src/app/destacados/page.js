import { perfiles } from '../Perfiles'
import Tarjeta from '../Tarjeta'

const tres = Math.ceil(perfiles.length / 3)
const inicio = perfiles.slice(0, tres)
const medio = [].concat(perfiles.slice(tres))
const dos = Math.ceil(medio.length / 2)
const climax = medio.slice(0, dos)
const final = medio.slice(dos)

export default function Page() {
	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="lg:col-span-1 col-span-3">
				{inicio.map(perfil => {
					return (
						<Tarjeta
							enlace={`/destacados/${perfil.usuario_simple}`}
							key={perfil.usuario}
							className='mb-4'
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
			<div className="lg:col-span-1 col-span-3">
				{climax.map(perfil => {
					return (
						<Tarjeta
							enlace={`/destacados/${perfil.usuario_simple}`}
							key={perfil.usuario}
							className='mb-4'
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
			<div className="lg:col-span-1 col-span-3">
				{final.map(perfil => {
					return (
						<Tarjeta
							enlace={`/destacados/${perfil.usuario_simple}`}
							key={perfil.usuario}
							className='mb-4'
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
		</div>
	)
}