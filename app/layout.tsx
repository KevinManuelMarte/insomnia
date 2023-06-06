import NavBar from './NavBar'
import './globals.css'

export const metadata = {
  title: 'Insomnia - Inicio',
}

export default function RootLayout({ children }) {
  return (
    <html className="bg-[url('/stars.png')] bg-cover bg-fixed bg-norepeat" lang="en">
      <body className='backdrop-blur-xl bg-noche-900/10 min-h-screen'>
        <NavBar/>
        <div className="py-8 max-w-screen-2xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
