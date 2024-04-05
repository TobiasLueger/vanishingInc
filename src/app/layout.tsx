import Navigation from '@/components/Navigation/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-[6rem]`}>
        <Navigation />
        <main className='flex flex-col items-center justify-between'>
          {children}
        </main>
        
      </body>
    </html>
  )
}
