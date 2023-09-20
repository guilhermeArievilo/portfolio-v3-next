import Header from '@/components/header'
import './globals.scss'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Footer from '@/components/footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio - Guilherme Ariêvilo',
  description: 'Engenheiro da computação e e desenvolvedor de aplicações web altamente qualificado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
    <head>
      <meta name="google-site-verification" content="ogbKCdvZLMyBftXbG62m6si3e7ajEHVwLwScVlbfdN0" />
    </head>
      <body className={`${raleway.className} relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
