type DashboardLayoutStructureProps = {
  children: React.ReactNode
}

const DashboardLayoutStructure = ({
  children,
  ...rest
}: DashboardLayoutStructureProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-full min-h-screen bg-muted text-gray-100">
      {children}
    </div>
  )
}

export { DashboardLayoutStructure }
