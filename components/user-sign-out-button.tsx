'use client'

import { signOut } from 'next-auth/react'

import Icon from './icons'
import { Button } from './ui/button'

export function UserSignOutButton() {
  const handleSignOut = () => signOut({ callbackUrl: '/login' })

  return (
    <Button
      variant="secondary"
      onClick={handleSignOut}
      className="flex items-center justify-start gap-1 w-full text-muted-foreground"
    >
      <Icon name="LogOut" size={24} /> <span className="text-lg ">Sair</span>
    </Button>
  )
}
