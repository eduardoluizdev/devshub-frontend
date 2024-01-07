import { Metadata } from 'next'

import { DashboardLayoutStructure } from '@/components/dashboard-layoyt-structure'

export const metadata: Metadata = {
  title: 'Clientes | Devshub',
  description: 'Clientes | Devshub',
  icons: [
    {
      url: '/images/favicon.ico',
      href: '/images/favicon.ico',
      sizes: '16x16',
    },
  ],
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayoutStructure>{children}</DashboardLayoutStructure>
}
