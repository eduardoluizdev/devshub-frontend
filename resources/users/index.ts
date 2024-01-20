import { User } from '@/entities/user'
import { httpClient } from '@/lib/httpClient'
import { httpServer } from '@/lib/httpServer'

const me = async (): Promise<User | undefined> => {
  const { data } = await httpServer.get('/users/me')

  return data.user
}

const signout = async (): Promise<void> => {
  await httpClient.post('/auth/signout')
}

const usersResource = { me, signout }

export { usersResource }
