import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { authorize } from '@/lib/authorize'
import { jwt } from '@/lib/jwt'
import { session } from '@/lib/session'

export const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
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
  secret: process.env.AUTH_SECRET,
}
