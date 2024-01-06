'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type SidebarActiveLinkProps = {
  href: string
  children: ReactNode
}

type ActiveLinkProps = {
  href: string
  children: ReactNode
}

const SidebarLink = ({ href, children }: SidebarActiveLinkProps) => {
  return <ActiveLink href={href}>{children}</ActiveLink>
}

const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <div>
      <Link
        href={href}
        className={`${
          isActive ? 'bg-gray-900 [&_svg]:text-primary' : ''
        } flex items-center gap-4 w-full p-3 rounded transition-all hover:bg-gray-900`}
      >
        {children}
      </Link>
    </div>
  )
}

export { SidebarLink }
