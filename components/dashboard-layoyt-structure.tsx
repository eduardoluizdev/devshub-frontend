import { DashboardSidebar } from './dashboard-sidebar'
import { DashboardTopbar } from './dashboard-topbar'

type DashboardLayoutStructureProps = {
  children: React.ReactNode
}

const DashboardLayoutStructure = ({
  children,
}: DashboardLayoutStructureProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-full min-h-screen bg-muted text-gray-100">
      <DashboardTopbar />
      <DashboardSidebar />
      <main className="overflow-auto h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)]">
        <div className="flex flex-col max-w-[1352px] p-6 pb-10 gap-10 mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

export { DashboardLayoutStructure }
