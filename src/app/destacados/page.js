import NavBar from '../NavBar'
import Distincion from '../Distincion'
import Tarjeta from './Tarjeta';
import { perfiles } from '../Perfiles'

export default function Destacados() {
  return (
    <>
			<NavBar />
			{perfiles.map(perfil => (
				<Tarjeta
					key={perfil.usuario}
					bg={perfil.bg}
					src={perfil.img_src}
					usuario={perfil.usuario}
					rareza={perfil.rareza}
					desc={perfil.desc}
					discord={perfil.discord}
					nacion={perfil.nacion}
					edad={perfil.edad}
				>
					{perfil.distinciones.map(distinciones => (
						<Distincion tipo={distinciones.distincion} op={perfil.op} />
					))}
				</Tarjeta>
			))}
    </>
  )
}

export const metadata = {
  title: 'Destacados - Insomnia',
};