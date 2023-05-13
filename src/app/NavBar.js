import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <>
      <nav className='sticky top-0 bg-noche-900/90 border-b border-noche-700/30 backdrop-blur text-stone-300 p-4 flex items-center justify-between'>
        <div className='relative flex items-center'>
          <Link href='/' className='relative flex items-center pr-2'>
            <Image className='' src='https://media.discordapp.net/attachments/1032516925617614878/1034170024564367370/logo4.png?width=458&height=458' height={40} width={40} quality={100} />
            <h1 className='text-xl font-medium'>Insomnia</h1>
          </Link>
          <ul class="relative flex items-center gap-5 text-sm">
            <li><Link className='hover:text-white duration-200' href='/destacados'>Destacados</Link></li>
            <li><Link className='hover:text-white duration-200' href='/guias'>Guías</Link></li>
            <li><Link className='hover:text-white duration-200' href='/blog'>Blog</Link></li>
          </ul>
        </div>
        <div className='relative flex items-center'>
          <a className='bg-pink-700/30 hover:bg-pink-700/50 duration-200 px-4 py-1 rounded-full text-sm font-semibold text-pink-700 hover:text-pink-600' href='https://discord.gg/m9taHt7CMw'>
            Entrar
          </a>
        </div>
      </nav>
    </>
  )
}