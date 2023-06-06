import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className=" sticky top-0 bg-noche-900/30 border-b border-noche-700/30 backdrop-blur text-stone-300 p-4 4z-40">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="relative flex items-center">
            <Link href="/" className="relative flex items-center">
              <Image
                className="mr-4"
                src="https://media.discordapp.net/attachments/1032516925617614878/1107528348118294548/prelogo1.png?width=458&height=458"
                height={40}
                width={40}
                quality={100}
                alt="Logo de insomnia"
              />
              <h1 className="text-2xl font-semibold pr-4 md:block hidden">
                Insomnia
              </h1>
            </Link>
            <ul className="relative font-semibold flex items-center gap-5 text-sm">
              <li>
                <Link
                  className="hover:text-white duration-200"
                  href="/destacados"
                >
                  Destacados
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-200" href="/guias">
                  Guias
                </Link>
              </li>
              <li>
                <Link className="hover:text-white duration-200" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center">
            <a
              className="bg-pink-700/30 hover:bg-pink-700/50 duration-200 px-4 py-1 rounded-full text-sm font-semibold text-pink-700 hover:text-pink-600"
              href="https://discord.gg/m9taHt7CMw"
            >
              Entrar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
