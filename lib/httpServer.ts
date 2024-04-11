import axios from 'axios'

import { auth } from '@/app/auth'
import { sleep } from '@/utils/sleep'

export const httpServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

httpServer.interceptors.request.use(async (config) => {
  const session = await auth()

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
