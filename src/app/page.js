import NavBar from './NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
			<NavBar/>
      <div className='grid grid-cols-4 py-24'>
        <div className='col-start-2 col-span-2 flex justify-center'>
          <Image src='/logo.png' width={150} height={150} alt='Logo de Insomnia' quality={100} />
        </div>
        <div className='col-start-2 col-span-2 text-stone-100 text-center'>
          <h1 className='text-5xl leading-relaxed'>Insomnia</h1>
          <p className='text-xl'>Esta es la página oficial del servidor de Discord Insomnia.</p>
        </div>
      </div>
    </>
  )
}
