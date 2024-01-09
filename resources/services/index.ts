import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'

import { Service } from '@/entities/service'
import { authOptions } from '@/lib/auth'
import { httpClient } from '@/lib/httpClient'
import { httpServer } from '@/lib/httpServer'

type ServiceParams = {
  params: Service
  requesType: 'client' | 'server'
}

const create = async ({ params, requesType = 'client' }: ServiceParams) => {
  let session = null

  requesType === 'server'
    ? (session = await getServerSession(authOptions))
    : (session = await getSession())

  const { data } = await httpClient.post(
    '/services',
    {
      name: params.name,
      price: params.price,
      renewal: params.renewal,
    },
    {
      params: params.customerId ? { customerId: params.customerId } : {},
    }
  )

  return data
}

const getAll = async (requesType: 'client' | 'server') => {
  let requestClient = null

  requesType == 'server'
    ? (requestClient = httpServer)
    : (requestClient = httpClient)

  const { data } = await requestClient.get('/services/me')
  return data
}

// const update = async (customerId: string, params: Customer) => {
//   console.log('customerId', customerId)
//   console.log('params', params)
//   const { data } = await httpClient.put(`/customers/${customerId}`, {
//     name: params.name,
//     email: params.email,
//     phone: params.phone,
//     sector: params.sector,
//   })
//   return data
// }

const remove = async ({
  serviceId,
  customerId,
}: {
  serviceId: string
  customerId?: string
}) => {
  if (customerId) {
    const { data } = await httpClient.delete(
      `/services/${serviceId}?customerId=${customerId}`
    )
    return data
  }

  const { data } = await httpClient.delete(`/services/${serviceId}`)
  return data
}

const serviceResource = { create, getAll, remove }

export { serviceResource }
