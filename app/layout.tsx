import '@/styles/globals.css'

import { Inter as FontSans } from 'next/font/google'

import { AuthProvider } from '@/components/auth-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/cn'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type RootLayoutProps = {
  children: React.ReactNode
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
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
