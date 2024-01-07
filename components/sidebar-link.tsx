'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type SidebarActiveLinkProps = {
  href: string
  children: ReactNode
  passHref?: boolean
  className?: string
}

const SidebarLink = ({
  href,
  children,
  passHref = false,
  className = '',
}: SidebarActiveLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${
        isActive ? 'bg-gray-900 [&_svg]:text-primary' : ''
      } flex items-center gap-4 w-full p-3 rounded transition-all hover:bg-gray-900 ${className}`}
      passHref={passHref}
      target={passHref ? '_blank' : undefined}
    >
      {children}
    </Link>
  )
}

export { SidebarLink }
