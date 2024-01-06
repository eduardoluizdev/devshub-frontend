import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export type SessionProps = {
  session: Session
  token: JWT
}

export const session = async ({ session, token }: SessionProps) => {
  return {
    ...session,
    user: {
      ...token.user,
    },
  }
}
