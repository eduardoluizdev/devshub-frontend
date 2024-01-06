import { User } from '@prisma/client'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      image: string | undefined
      role: 'USER' | 'ADMIN'
      access_token: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User
  }
}
