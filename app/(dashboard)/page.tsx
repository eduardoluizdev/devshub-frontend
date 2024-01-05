import { UserProfile } from '@/components/user-profile'
import { UserSignOutButton } from '@/components/user-sign-out-button'

export default async function Dashboard() {
  return (
    <>
      <h1>
        dashboard123 <UserSignOutButton />
      </h1>
      <hr />
      <UserProfile />
    </>
  )
}
