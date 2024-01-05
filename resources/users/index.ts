import { getServerSession } from 'next-auth'

import { User } from '@/entities/user'
import { authOptions } from '@/lib/auth'

const me = async () => {
  const session = await getServerSession(authOptions)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.user.access_token}`,
    },
  })

  const data = (await response.json()) as User

  return data
}

const usersResource = { me }

export { usersResource }
