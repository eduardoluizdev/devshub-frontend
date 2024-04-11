import NextAuth from 'next-auth'

import { authOptions } from './auth-options'

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authOptions,
})
