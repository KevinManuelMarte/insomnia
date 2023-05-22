import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='grid 2xl:grid-cols-8 xl:grid-cols-5 grid-cols-5 py-12 relative '>  
        <div className='2xl:col-start-4 xl:col-start-3 2xl:col-start-2 col-start-2 xl:col-span-1 2xl:col-span-2 col-span-3 flex place-content-center'>
          <Image src='https://media.discordapp.net/attachments/1032516925617614878/1107528348118294548/prelogo1.png?width=1024&height=1024' width={1024} height={1024} alt='Logo de Insomnia' quality={100} />
        </div>
        <div className='2xl:col-start-4 xl:col-start-2 2xl:col-start-2 col-start-2 xl:col-span-3 2xl:col-span-2 col-span-3 text-stone-100 text-center'>
          <h1 className='xl:text-5xl 2xl:text-7xl text-4xl xl:leading-relaxed leading-relaxed 2xl:leading-tight'>a sepia</h1>
          <p className='xl:text-xl 2xl:text-3xl'>Esta es la página oficial del servidor de Discord Insomnia.</p>
        </div>
      </div>
    </>
  )
}
