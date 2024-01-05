import { User } from '@/entities/user'
import { usersResource } from '@/resources/users'

const userProfile = async (): Promise<User> => {
  return await usersResource.me()
}
export async function UserProfile() {
  const user = await userProfile()
  return <div>{JSON.stringify(user, null, 2)}</div>
}
