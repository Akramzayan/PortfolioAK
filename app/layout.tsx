import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Font } from 'three/examples/jsm/Addons.js'
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from '@/components/main/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AK Portfolio',
  description: 'This Is my Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
