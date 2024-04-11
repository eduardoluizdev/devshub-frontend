import { getSession } from 'next-auth/react'

import { auth } from '@/app/auth'
import { Service } from '@/entities/service'
import { httpClient } from '@/lib/httpClient'
import { httpServer } from '@/lib/httpServer'

type ServiceParams = {
  params: Service
  requesType: 'client' | 'server'
}

const create = async ({ params, requesType = 'client' }: ServiceParams) => {
  let session = null

  requesType === 'server'
    ? (session = await auth())
    : (session = await getSession())

  const { data } = await httpClient.post(
    '/services',
    {
      name: params.name,
      price: params.price,
      renewal: params.renewal,
    },
    {
      params: params.customerId ? { customerId: params.customerId } : undefined,
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

const update = async (serviceId: string, params: Service) => {
  if (params.customerId) {
    const { data } = await httpClient.put(
      `/services/${serviceId}`,
      {
        name: params.name,
        price: params.price,
        renewal: params.renewal,
      },
      {
        params: { customerId: params.customerId ? params.customerId : null },
      }
    )
    return data
  }

  const { data } = await httpClient.put(`/services/${serviceId}`, {
    name: params.name,
    price: params.price,
    renewal: params.renewal,
  })

  return data
}

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

const serviceResource = { create, getAll, update, remove }

export { serviceResource }
