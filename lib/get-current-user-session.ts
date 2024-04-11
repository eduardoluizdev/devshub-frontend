import { auth } from '@/app/auth'
import { User } from '@/entities/user'

export async function getCurrentUserSession(): Promise<User | null> {
  const session = await auth()

  const user = session?.user ?? null

  if (!user) {
    return null
  }

  return user as User
}
