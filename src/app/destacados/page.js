import NavBar from '../NavBar'
import Distincion from '../Distincion'
import { Tarjeta } from './Tarjeta';

export default function Destacados() {
  return (
    <>
			<NavBar />
			<Tarjeta
				bg='emerald'
				src='https://media.discordapp.net/attachments/1032516925617614878/1106068911893524490/fi.png?width=458&height=458'
				user='Anfitrion'
				rareza='l'
				desc='El creador y líder de Insomnia. Anfitrion siempre trata de darles el mejor contenido posible a los miembros de esta bonita comunidad.'
				discord='Anfitrion#0082'
				nacion='Peruano'
				edad='17'
			>
				<Distincion tipo='1' op='s' />
				<Distincion tipo='3' op='s' />
				<Distincion tipo='6' op='s' />
				<Distincion tipo='7' op='s' />
				<Distincion tipo='8' op='s' />
				<Distincion tipo='9' op='s' />
				<Distincion tipo='10' op='s' />
				<Distincion tipo='11' op='s' />
			</Tarjeta>
			<Tarjeta
				bg='cyan'
				src='https://media.discordapp.net/attachments/1032516925617614878/1106068912149368852/nizero.png?width=458&height=458'
				user='Nic0_Mongrant'
				rareza='e'
				desc='También conocido como N. Mongrant. No solo es uno de los miembros más activos de Insomnia, sino que también es la mano derecha de Anfitrion y moderador de Insomnia. N. Mongrant construyó gran parte del lobby del servidor amistoso de Minecraft Tecla 3, y mientras Anfitrion estuvo ausente, él jugaba y le daba vida al servidor.'
				discord='Niczero_Mongrant#3665'
				nacion='Argentino'
				edad='16'
			>
				<Distincion tipo='2' op='s' />
				<Distincion tipo='4' op='s' />
				<Distincion tipo='9' op='s' />
				<Distincion tipo='T2' op='s' />
				<Distincion tipo='10' op='s' />
			</Tarjeta>
			<Tarjeta
				bg='red'
				src='https://media.discordapp.net/attachments/1032516925617614878/1106262852307791892/image.png?width=458&height=458'
				user='Lenchata'
				rareza='e'
				desc='Un gran donador y alguna vez administrador de Insomnia. Lenchata se encuentra actualmente inactivo.'
				discord='Lenchata#5606'
				nacion='Chileno'
				edad='17'
			>
				<Distincion tipo='5' op='s' />
				<Distincion tipo='11' op='s' />
			</Tarjeta>
			<Tarjeta
				src='https://media.discordapp.net/attachments/1032516925617614878/1106068911654453290/cian.png'
				user='Caian'
				rareza='u'
				desc='El argentino más loco y divertido que Insomnia haya concido. Caian siempre aporta gran parte de la diversión en los canales de voz, es buen amigo y leal a Insomnia.'
				discord='caian#6161'
				nacion='Argentino'
				edad='14'
			>
				<Distincion tipo='8' />
				<Distincion tipo='11' />
				<Distincion tipo='T2' />
			</Tarjeta>
			<Tarjeta
				src='https://media.discordapp.net/attachments/1032516925617614878/1106068912430395452/pena.png?width=458&height=458'
				user='adrianpeña'
				rareza='r'
				desc='Peruano de corazón y gran amigo de N. Mongrant. adrianpeña es muy activo y un poquito "pipipi".'
				discord='adrianpeña#7645'
				nacion='Peruano'
				edad='14'
			>
				<Distincion tipo='T2' />
			</Tarjeta>
    </>
  )
}

export const metadata = {
  title: 'Destacados - Insomnia',
};