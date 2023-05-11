import NavBar from '../NavBar'
import Image from 'next/image'
import Nizero from '../../../public/nizero.png'
import Cian from '../../../public/cian.png'
import Peña from '../../../public/peña.png'
import Fi from '../../../public/fi.png'
import Distincion from '../Distincion'
import { Tarjeta, TarjetaDistinciones, TarjetaFdp, TarjetaInfo } from './Tarjeta'

export default function Destacados() {
  return (
    <>
			<NavBar />
			<Tarjeta bg='emerald' >
				<TarjetaFdp>
					<Image src={Fi} />
				</TarjetaFdp>
				<TarjetaInfo
					user='Anfitrion'
					rareza='l'
					desc='El creador y líder de Insomnia. Anfitrion siempre trata de darles el mejor contenido posible a los miembros de esta bonita comunidad.'
					discord='Anfitrion#0082'
					nacion='Peruano'
					edad='17'
				/>
				<TarjetaDistinciones>
					<Distincion tipo='1' op='s' />
					<Distincion tipo='3' op='s' />
					<Distincion tipo='5' op='s' />
					<Distincion tipo='6' op='s' />
					<Distincion tipo='7' op='s' />
					<Distincion tipo='8' op='s' />
					<Distincion tipo='9' op='s' />
					<Distincion tipo='10' op='s' />
				</TarjetaDistinciones>
			</Tarjeta>
			<Tarjeta bg='cyan' >
				<TarjetaFdp>
					<Image src={Nizero} />
				</TarjetaFdp>
				<TarjetaInfo
					user='Nic0_Mongrant'
					rareza='e'
					desc='También conocido como N. Mongrant. No solo es uno de los miembros más activos de Insomnia, sino que también es la mano derecha de Anfitrion y moderador de Insomnia. N. Mongrant construyó gran parte del lobby del servidor amistoso de Minecraft Tecla 3, y mientras Anfitrion estuvo ausente, él jugaba y le daba vida al servidor.'
					discord='Niczero_Mongrant#3665'
					nacion='Argentino'
					edad='16'
				/>
				<TarjetaDistinciones>
					<Distincion tipo='2' op='s' />
					<Distincion tipo='4' op='s' />
					<Distincion tipo='8' op='s' />
					<Distincion tipo='9' op='s' />
					<Distincion tipo='10' op='s' />
					<Distincion tipo='T2' op='s'/>
				</TarjetaDistinciones>
			</Tarjeta>
			<Tarjeta>
				<TarjetaFdp>
					<Image src={Cian}/>
				</TarjetaFdp>
				<TarjetaInfo
					user='Caian'
					rareza='u'
					desc='El argentino más loco y divertido que Insomnia haya concido. Caian siempre aporta gran parte de la diversión en los canales de voz, es buen amigo y leal a Insomnia.'
					discord='caian#6161'
					nacion='Argentino'
					edad='14'
				/>
				<TarjetaDistinciones>
					<Distincion tipo='7'/>
					<Distincion tipo='10' />
					<Distincion tipo='T2' />
				</TarjetaDistinciones>
			</Tarjeta>
			<Tarjeta>
				<TarjetaFdp>
					<Image src={Peña}/>
				</TarjetaFdp>
				<TarjetaInfo
					user='adrianpeña'
					rareza='r'
					desc='Peruano de corazón y gran amigo de N. Mongrant. adrianpeña es muy activo y un poquito "pipipi".'
					discord='adrianpeña#7645'
					nacion='Peruano'
					edad='14'
				/>
				<TarjetaDistinciones>
					<Distincion tipo='T2' />
				</TarjetaDistinciones>
			</Tarjeta>
    </>
  )
}

export const metadata = {
  title: 'Destacados - Insomnia',
};