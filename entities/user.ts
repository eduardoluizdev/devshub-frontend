export interface User {
  id: string
  name: string
  email: string
  image: string | undefined
  role: 'USER' | 'ADMIN'
  access_token: string
}
