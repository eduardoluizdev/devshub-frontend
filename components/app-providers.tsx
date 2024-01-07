'use client'

import { ThemeProvider } from 'next-themes'

import { AuthProvider } from './auth-provider'
import { QueryProvider } from './query-provider'
import { Toaster } from './ui/toaster'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <QueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </QueryProvider>
    </AuthProvider>
  )
}

export { AppProviders }
