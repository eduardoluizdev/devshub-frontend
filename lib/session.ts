import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export type SessionProps = {
  session: Session
  token: JWT
}

export const session = async ({ session, token }: SessionProps) => {
  if (token) {
    return {
      ...session,
      user: {
        ...session.user,
        access_token: token.access_token,
      },
    }
  }

  return session
}
