import '@/styles/globals.css'

import { Inter as FontSans } from 'next/font/google'

import AuthProvider from '@/components/auth-provider'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/cn'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <AuthProvider>
          <Toaster />

          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
