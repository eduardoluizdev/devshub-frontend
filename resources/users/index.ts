import { User } from '@/entities/user'
import { httpServer } from '@/lib/httpServer'

const me = async (): Promise<User | undefined> => {
  const { data } = await httpServer.get('/users/me')

  return data.user
}

const usersResource = { me }

export { usersResource }
