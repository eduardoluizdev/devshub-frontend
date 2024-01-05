import { isEmpty } from 'lodash'

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

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  ).then((response) => response.json())

  if (response.error) {
    throw new Error('Usuário ou senha incorretos')
  }

  return response
}

export { authorize }
