import { getServerSession, Session } from 'next-auth'

import { authOptions } from '@/lib/auth'

export async function getCurrentUserSession(): Promise<Session | null> {
  return getServerSession(authOptions)
}
