import { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

import { authorize } from '@/helpers/authorize'
import { jwt } from '@/helpers/jwt'
import { session } from '@/helpers/session'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {},
      authorize,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt,
    session,
  },
  secret: process.env.NEXTAUTH_SECRET,
}
