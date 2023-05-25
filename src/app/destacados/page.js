import { perfiles } from '../Perfiles'
import Tarjeta from '../Tarjeta'

export default function Page() {
	return (
		<div className="grid grid-cols-3 gap-4">
			{perfiles.map(perfil => {
				return (
					<Tarjeta
						key={perfil.usuario_simple}
						enlace={`/destacados/${perfil.usuario_simple}`}
						titulo={perfil.usuario}
						distincion={perfil.distincion}
						img_src={perfil.img_src}
						subtitulo={perfil.cargo}
					/>
				)
			})}
		</div>
	)
}