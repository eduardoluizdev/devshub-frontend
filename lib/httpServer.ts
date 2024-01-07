import axios from 'axios'
import { getServerSession } from 'next-auth'

import { sleep } from '@/utils/sleep'

import { authOptions } from './auth'

export const httpServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

httpServer.interceptors.request.use(async (config) => {
  const session = await getServerSession(authOptions)

  const accessToken = session?.user.access_token

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

httpServer.interceptors.response.use(async (data) => {
  await sleep(500)

  return data
})
