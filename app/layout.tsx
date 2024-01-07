import '@/styles/globals.css'

import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { AppProviders } from '@/components/app-providers'
import { cn } from '@/lib/cn'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Dashboard | Devshub',
  description: 'Dashboard | Devshub',
  icons: [
    {
      url: '/images/favicon.ico',
      href: '/images/favicon.ico',
      sizes: '16x16',
    },
  ],
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-muted font-sans antialiased',
          fontSans.variable
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
