import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'

import { Customer } from '@/entities/customer'
import { authOptions } from '@/lib/auth'
import { httpClient } from '@/lib/httpClient'
import { httpServer } from '@/lib/httpServer'

type CreateParams = {
  params: Customer
  requesType: 'client' | 'server'
}

const create = async ({ params, requesType }: CreateParams) => {
  let session = null

  requesType === 'server'
    ? (session = await getServerSession(authOptions))
    : (session = await getSession())

  const { data } = await httpClient.post('/customers', {
    ...params,
    userId: session?.user.id,
  })

  return data
}

const getAll = async (requesType: 'client' | 'server') => {
  let requestClient = null

  requesType == 'server'
    ? (requestClient = httpServer)
    : (requestClient = httpClient)

  const { data } = await requestClient.get('/customers')
  return data
}

const customerResource = { create, getAll }

export { customerResource }
