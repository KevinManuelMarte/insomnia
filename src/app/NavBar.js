export default function NavBar() {
  return (
    <>
      <nav className='flex items-center justify-between flex-wrap bg-neutral-900 p-6 border-b border-neutral-800'>
        <div className='flex items-center flex-shrink-0 text-stone-100 mr-6 space-x-4'>
          <img src='https://media.discordapp.net/attachments/1032516925617614878/1034170024564367370/logo4.png?width=458&height=458' width="40" height="40" />
          <span className='font-semibold text-xl tracking-tight'>Insomnia</span>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <a href='/' className='block mt-4 lg:inline-block lg:mt-0 text-stone-100 hover:text-white mr-4'>
              Inicio
            </a>
            <a href='/destacados' className='block mt-4 lg:inline-block lg:mt-0 text-stone-100 hover:text-white mr-4'>
              Destacados
            </a>
            <a href='/guias' className='block mt-4 lg:inline-block lg:mt-0 text-stone-100 hover:text-white mr-4'>
              Guías
            </a>
          </div>
          <div>
            <a href='https://discord.gg/m9taHt7CMw' className='block mt-4 lg:inline-block lg:mt-0 text-pink-600 hover:text-rose-500 hover:font-medium duration-700 mr-4' target='blank'>
              Entrar
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}