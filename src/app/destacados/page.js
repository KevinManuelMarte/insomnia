import NavBar from '../NavBar'
import Image from 'next/image'
import Nizero from '../../../public/nizero.png'
import Cian from '../../../public/cian.png'
import Peña from '../../../public/peña.png'
import Fi from '../../../public/fi.png'
import Distincion from './Distincion'
import { Tarjeta, TarjetaDistinciones, TarjetaFdp, TarjetaInfo } from './Tarjeta'

export default function Destacados() {
  return (
    <>
			<NavBar />
			<Tarjeta>
				<TarjetaFdp>
					<Image src={Nizero} />
				</TarjetaFdp>
				<TarjetaInfo
					user='Nic0_Mongrant'
					desc='También conocido como N. Mongrant. No solo es uno de los miembros más activos de Insomnia, sino que también es la mano derecha de Anfitrion y moderador de Insomnia. N. Mongrant construyó gran parte del lobby del servidor amistoso de Minecraft Tecla 3, y mientras Anfitrion estuvo ausente, él jugaba y le daba vida al servidor.'
					discord='Niczero_Mongrant#3665'
					nacion='argentino'
					edad='16'
				/>
				<TarjetaDistinciones>
					<Distincion color='text-orange-200 border-orange-200'>Pride guardián</Distincion>
					<Distincion color='text-sky-300 border-sky-300'>Moderador</Distincion>
					<Distincion color='text-green-400 border-green-400'>Estelar Tecla 3</Distincion>
					<Distincion color='text-red-400 border-red-400'>Mano derecha</Distincion>
					<Distincion color='text-rose-300 border-rose-300'>Diseñador</Distincion>
				</TarjetaDistinciones>
			</Tarjeta>
			<Tarjeta>
				<TarjetaFdp>
					<Image src={Cian}/>
				</TarjetaFdp>
				<TarjetaInfo
					user='Caian'
					desc='El argentino más loco y divertido que Insomnia haya concido. Caian siempre aporta gran parte de la diversión en los canales de voz, es buen amigo y leal a Insomnia.'
					discord='caian#6161'
					nacion='argentino'
					edad='14'
				/>
				<TarjetaDistinciones>
					<Distincion color='text-orange-200 border-orange-200'>Pride guardián</Distincion>
					<Distincion color='text-pink-400 border-pink-400'>Anfitrión</Distincion>
					<Distincion color='text-green-400 border-green-400'>Estelar Tecla 3</Distincion>
				</TarjetaDistinciones>
			</Tarjeta>
			<Tarjeta>
				<TarjetaFdp>
					<Image src={Peña}/>
				</TarjetaFdp>
				<TarjetaInfo
					user='adrianpeña'
					desc='Peruano de corazón y gran amigo de N. Mongrant. adrianpeña es muy activo y un poquito "pipipi".'
					discord='adrianpeña#7645'
					nacion='peruano'
					edad='14'
				/>
				<TarjetaDistinciones>
					<Distincion color='text-green-400 border-green-400'>Estelar Tecla 3</Distincion>
				</TarjetaDistinciones>
			</Tarjeta>
			<Tarjeta>
				<TarjetaFdp>
					<Image src={Fi}/>
				</TarjetaFdp>
				<TarjetaInfo
					user='Anfitrion'
					desc='El creador y líder de Insomnia. Anfitrion siempre trata de darles el mejor contenido posible a los miembros de esta bonita comunidad.'
					discord='Anfitrion#0082'
					nacion='peruano'
					edad='17'
				/>
				<TarjetaDistinciones>
					<Distincion color='text-orange-200 border-orange-200'>Pride guardián</Distincion>
					<Distincion color='text-pink-400 border-pink-400'>Anfitrión</Distincion>
					<Distincion color='text-emerald-400 border-emerald-400'>Administrador</Distincion>
					<Distincion color='text-lime-400 border-lime-400'>Jefe moderador</Distincion>
					<Distincion color='text-amber-400 border-amber-400'>Programador</Distincion>
					<Distincion color='text-rose-300 border-rose-300'>Diseñador</Distincion>
					<Distincion color='text-orange-400 border-orange-400'>Publicista</Distincion>
					<Distincion color='text-violet-400 border-violet-400'>Sporte</Distincion>
				</TarjetaDistinciones>
			</Tarjeta>
    </>
  )
}

export const metadata = {
  title: 'Destacados - Insomnia',
};