import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'

type GetUserAccessTokenProps = {
  access_token: string | null
} | null

export async function getUserAccessToken(): Promise<GetUserAccessTokenProps> {
  const session = await getServerSession(authOptions)

  if (!session) {
    return null
  }

  return {
    access_token: session?.user?.access_token,
  }
}
