import Image from 'next/image'
import { Parrafo, Titulo1 } from './Mini'

export default function Home() {
  return (
    <>
      <div className='grid 2xl:grid-cols-8 xl:grid-cols-5 grid-cols-5 py-12 relative '>  
        <div className='2xl:col-start-4 xl:col-start-3 2xl:col-start-2 col-start-2 xl:col-span-1 2xl:col-span-2 md:col-span-1 md:col-start-3 col-span-3 flex place-content-center'>
          <Image src='https://media.discordapp.net/attachments/1032516925617614878/1107528348118294548/prelogo1.png?width=1024&height=1024' width={1024} height={1024} alt='Logo de Insomnia' quality={100} />
        </div>
        <div className='2xl:col-start-4 xl:col-start-2 2xl:col-start-2 col-start-2 xl:col-span-3 2xl:col-span-2 col-span-3 text-center'>
          <Titulo1 className='text-noche-100'>Insomnia</Titulo1>
          <Parrafo className='text-noche-200'>Esta es la página oficial del servidor de Discord Insomnia.</Parrafo>
        </div>
      </div>
    </>
  )
}
