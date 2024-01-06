import { Logo } from './logo'
import { TopbarUserDropdown } from './topbar-user-dropdown'

const DashboardTopbar = () => {
  return (
    <div className="col-span-full h-[72px] lg:h-[80px] px-4 lg:pr-8 bg-gray-850 border border-transparent border-b-gray-700 flex items-center">
      <div className="flex items-center mr-auto flex-shrink-0">
        <Logo />
      </div>
      <div className="flex items-center ml-auto gap-3 lg:gap-4">
        <TopbarUserDropdown />
      </div>
    </div>
  )
}

export { DashboardTopbar }
