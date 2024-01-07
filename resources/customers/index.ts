import { getSession } from 'next-auth/react'

import { Customer } from '@/entities/customer'
import { httpClient } from '@/lib/httpClient'

const create = async (params: Customer) => {
  const session = await getSession()

  const { data } = await httpClient.post('/customers', {
    ...params,
    userId: session?.user.id,
  })

  return data
}

const getAll = async () => {
  const { data } = await httpClient.get('/customers')
  return data
}

const customerResource = { create, getAll }

export { customerResource }
