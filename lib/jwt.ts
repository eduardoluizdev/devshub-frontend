import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export type UserResponse = any

export type JWTProps = {
  token: JWT
  user: User
}

export const jwt = ({ token, user }: JWTProps) => {
  if (user) {
    return {
      ...token,
      user: {
        ...user,
      },
    }
  }

  return token
}
