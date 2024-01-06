import { getServerSession } from 'next-auth'

import { User } from '@/entities/user'
import { authOptions } from '@/lib/auth'

export async function getCurrentUserSession(): Promise<User | null> {
  const session = await getServerSession(authOptions)

  const user = session?.user ?? null

  if (!user) {
    return null
  }

  return user as User
}
