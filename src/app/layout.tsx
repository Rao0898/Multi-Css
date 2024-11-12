import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


// import Header from './component/header'
import Footer from './component/footer'
import Header from './component/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luxe Timepieces',
  description: 'Exquisite watches for the discerning collector',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>{children}</main>
      <Footer/>
      </body>
    </html>
  )
}