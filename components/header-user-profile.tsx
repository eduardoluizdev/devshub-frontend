import { auth } from '@/app/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getNameInitials } from '@/utils/get-name-initials'

const UserHeaderProfile = async () => {
  const session = await auth()

  if (!session) {
    return null
  }

  return (
    <div className="flex gap-4 items-center">
      <Avatar className="lg:w-[3.25rem] lg:h-[3rem] w-[2.75rem] h-[2.5rem] rounded-[1.1875rem]">
        <AvatarImage
          src={session.user.image}
          className="object-cover"
          alt={session.user.name}
        />
        <AvatarFallback className="bg-muted-foreground rounded-[1.1875rem]">
          {getNameInitials(session.user.name)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-start">
        <span className="text-sm font-semibold text-muted-foreground text-left">
          {session.user.name}
        </span>
        <span className="text-xs text-muted-foreground text-left">
          {session.user.email}
        </span>
      </div>
    </div>
  )
}

export { UserHeaderProfile }
