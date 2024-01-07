import { isEmpty } from 'lodash'

import { httpServer } from './httpServer'

export type LoginFormDataProps = {
  email: string
  password: string
}

export type CredentialsType = Record<never, string> | undefined

const authorize = async (credentials: CredentialsType) => {
  if (isEmpty(credentials)) {
    throw new Error('Usuário ou senha incorretos')
  }

  const { email, password } = credentials as LoginFormDataProps

  const { data } = await httpServer.post('/auth/signin', {
    email,
    password,
  })

  if (data.error) {
    throw new Error('Usuário ou senha incorretos')
  }

  return data
}

export { authorize }
