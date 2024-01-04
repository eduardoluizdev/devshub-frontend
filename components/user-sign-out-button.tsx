'use client'

import { signOut } from 'next-auth/react'

import Icon from './icons'
import { Button } from './ui/button'

export function UserSignOutButton() {
  const handleSignOut = () => signOut({ callbackUrl: '/login' })

  return (
    <Button
      variant={'outline'}
      onClick={handleSignOut}
      className="flex items-center justify-between gap-1"
    >
      <Icon name="LogOut" size={16} /> Sair
    </Button>
  )
}
