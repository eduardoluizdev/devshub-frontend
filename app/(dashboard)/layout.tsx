import { DashboardLayoutStructure } from '@/components/dashboard-layoyt-structure'
import { DashboardTopbar } from '@/components/dashboard-topbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayoutStructure>
      <DashboardTopbar />
      {children}
    </DashboardLayoutStructure>
  )
}
