import './globals.css'

export const metadata = {
  title: 'Insomnia - Inicio',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-noche-900 bg-fixed' lang="en">
      <body className='backdrop-blur-xl'>{children}</body>
    </html>
  )
}