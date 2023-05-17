import Image from 'next/image'
import { BsPerson } from 'react-icons/bs'

export default function Invitacion() {
  return (

        <div className='bg-ocaso-800/50 rounded-lg px-4 pt-1 pb-2'>
          <div className='grid grid-cols-8'>
            <div className='col-span-8'>
              <p className='text-sm font-bold text-neutral-300/90 py-2'>¡Únete a Insomnia para disfrutar de este evento!</p>
            </div>
            <div className='col-span-1'>
              <Image src='https://media.discordapp.net/attachments/1032516925617614878/1107528348118294548/prelogo1.png?width=458&height=458' height={256} width={256} alt='Logo de Insomnia' quality={100} />
            </div>
            <div className='col-span-7 pl-4 flex justify-between items-center'>
              <div className=''>
                <h1 className='text-yellow-300 text-2xl font-semibold'>
                  Insomnia 🌔
                </h1>
                <p className='text-neutral-300/90 flex items-center'>
                  <BsPerson className='mr-1' /> 87 miembros
                </p>
              </div>
              <div>
                <a
                  className='text-yellow-300 font-bold text-lg bg-yellow-300/30 px-4 py-2 rounded-lg hover:text-yellow-400 hover:bg-yellow-300/40 duration-200'
                  href='https://discord.gg/m9taHt7CMw'
                  target='blank'
                >
                  Unirse
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}