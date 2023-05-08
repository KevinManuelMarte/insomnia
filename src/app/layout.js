import './globals.css'

export const metadata = {
  title: 'Insomnia - Inicio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-neutral-900'>{children}</body>
    </html>
  )
}
