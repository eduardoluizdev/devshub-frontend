import { getServerSession } from 'next-auth'

import { User } from '@/entities/user'
import { authOptions } from '@/lib/auth'

const me = async (): Promise<User | undefined> => {
  const session = await getServerSession(authOptions)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user.access_token}`,
        },
      }
    )

    return (await response.json()) as User
  } catch (error) {
    console.error(error)
  }
}

const usersResource = { me }

export { usersResource }
