import { getSession } from 'next-auth/react'

import { Customer } from '@/entities/customer'

const create = async (data: Customer) => {
  const session = await getSession()

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/customers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user.access_token}`,
        },
        body: JSON.stringify({
          ...data,
          userId: session?.user.id,
        }),
      }
    )

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

const customerResource = { create }

export { customerResource }
