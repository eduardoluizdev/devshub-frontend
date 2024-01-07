import { DashboardLayoutStructure } from '@/components/dashboard-layoyt-structure'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayoutStructure>{children}</DashboardLayoutStructure>
}
