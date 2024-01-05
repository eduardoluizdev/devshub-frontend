import { User } from '@prisma/client'

declare module 'next-auth' {
  interface User {
    access_token: string
  }
  interface Session {
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string
  }
}
