import NavBar from './NavBar'
import './globals.css'

export const metadata = {
  title: 'Insomnia - Inicio',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-gradient-to-b from-noche-900 to-ocaso-900 bg-fixed' lang="en">
      <body className='backdrop-blur-xl'>
        <NavBar/>
        <div className="my-8 xl:mx-16 md:mx-8 mx-2">
          {children}
        </div>
      </body>
    </html>
  )
}