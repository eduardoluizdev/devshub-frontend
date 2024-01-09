import Icon from './icons'
import { SidebarLink } from './sidebar-link'

const DashboardSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col gap-3 p-3 pt-6 border border-transparent border-r-gray-700 transition-all ease-in-out duration-300 w-[216px]">
      <SidebarLink href="/">
        <Icon name="Home" size={24} />
        <span>Dashboard</span>
      </SidebarLink>

      <SidebarLink href="/customers">
        <Icon name="UserPlus" size={24} />
        <span>Clientes</span>
      </SidebarLink>

      <SidebarLink href="/services">
        <Icon name="Settings" size={24} />
        <span>Serviços</span>
      </SidebarLink>

      <SidebarLink
        href="https://discord.gg/JHxjsfuK4S"
        passHref={true}
        className="mt-auto"
      >
        <Icon name="ExternalLink" size={24} />
        <span>Discord</span>
      </SidebarLink>
    </div>
  )
}

export { DashboardSidebar }
