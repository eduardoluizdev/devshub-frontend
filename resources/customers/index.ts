import { getSession } from 'next-auth/react'

import { auth } from '@/app/auth'
import { Customer } from '@/entities/customer'
import { httpClient } from '@/lib/httpClient'
import { httpServer } from '@/lib/httpServer'

type CreateParams = {
  params: Customer
  requesType: 'client' | 'server'
}

const create = async ({ params, requesType }: CreateParams) => {
  let session = null

  requesType === 'server'
    ? (session = await auth())
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

const update = async (customerId: string, params: Customer) => {
  const { data } = await httpClient.put(`/customers/${customerId}`, {
    name: params.name,
    email: params.email,
    phone: params.phone,
    sector: params.sector,
  })
  return data
}

const remove = async (customerId: string) => {
  const { data } = await httpClient.delete(`/customers/${customerId}`)
  return data
}

const customerResource = { create, getAll, update, remove }

export { customerResource }
