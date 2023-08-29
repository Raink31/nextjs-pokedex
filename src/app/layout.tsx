import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import NavBar from './navBar'

const visitor = localFont({
  src: [
    {
      path: '../../public/fonts/visitor1.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/visitor2.ttf',
      weight: '400'
    }
  ],
  variable: '--font-visitor'
})

export const metadata: Metadata = {
  title: 'NextJS Pokédex',
  description: 'Pokedex of the first pokemon generation built with next js 13.4',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='max-h-screen max-w-[100vw] h-full'>
      <body className={`${visitor.className} max-h-screen max-w-[100vw] bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
