import axios from 'axios'
import { getSession } from 'next-auth/react'

import { sleep } from '@/utils/sleep'

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

httpClient.interceptors.request.use(async (config) => {
  const session = await getSession()

  const accessToken = session?.user.access_token

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

httpClient.interceptors.response.use(async (data) => {
  await sleep(500)

  return data
})
