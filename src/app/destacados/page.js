import Distincion from '../Distincion'
import Tarjeta from './Tarjeta';
import { perfiles } from '../Perfiles'
import Image from 'next/image';

const col1 = perfiles.filter(perfil => perfil.columna === 1)
const col2 = perfiles.filter(perfil => perfil.columna === 2)
const col3 = perfiles.filter(perfil => perfil.columna === 3)

export default function Destacados() {
  return (
    <>
			<div className="my-4 xl:mx-16 mx-4">
				<div className="grid grid-cols-12">
					<div className="lg:col-span-4 col-span-12">
						<ul className='list-none'>
							{col1.map(perfil => {
								return (
									<Tarjeta
										key={perfil.usuario}
										usuario={perfil.usuario}
										tipo={perfil.distincion}
										cargo={perfil.cargo}
										img_src={perfil.img_src}
										desc={perfil.desc}
									/>
								)
							})}
						</ul>
					</div>		
					<div className="lg:col-span-4 col-span-12">
						<ul className='list-none'>
							{col2.map(perfil => {
								return (
									<Tarjeta
										key={perfil.usuario}
										usuario={perfil.usuario}
										tipo={perfil.distincion}
										cargo={perfil.cargo}
										img_src={perfil.img_src}
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
										key={perfil.usuario}
										usuario={perfil.usuario}
										tipo={perfil.distincion}
										cargo={perfil.cargo}
										img_src={perfil.img_src}
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