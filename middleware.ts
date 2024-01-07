import { NextFetchEvent, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'

export const middleware = async (
  req: NextRequestWithAuth,
  event: NextFetchEvent
) => {
  const token = await getToken({ req })
  const isAuthenticated = !!token

  if (req.nextUrl.pathname.startsWith('/login') && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const authMiddleware = withAuth({
    pages: {
      signIn: `/login`,
    },
  })

  return authMiddleware(req, event)
}

export const config = {
  matcher: ['/', '/login', '/customers'],
}
