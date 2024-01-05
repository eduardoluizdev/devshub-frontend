import { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

import { authorize } from '@/lib/authorize'
import { jwt } from '@/lib/jwt'
import { session } from '@/lib/session'

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
