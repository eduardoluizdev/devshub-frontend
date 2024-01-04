import { User } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import { JWT } from 'next-auth/jwt'

export type UserResponse = any

export type JWTProps = {
  token: JWT
  user?: User | AdapterUser
}

export const jwt = ({ token }: JWTProps) => {
  return token
}
