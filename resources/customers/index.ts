import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'

import { Customer } from '@/entities/customer'
import { authOptions } from '@/lib/auth'

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

const get = async () => {
  const session = await getServerSession(authOptions)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/customers`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${session?.user.access_token}`,
        },
      }
    ).then((res) => res.json())

    return response.customers as Customer[]
  } catch (error) {
    console.error(error)
  }
}

const customerResource = { create, get }

export { customerResource }
