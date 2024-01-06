import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { UserHeaderProfile } from './header-user-profile'
import { UserSignOutButton } from './user-sign-out-button'

const TopbarUserDropdown = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <UserHeaderProfile />
        </PopoverTrigger>
        <PopoverContent className="min-w-[352px] mt-5 mr-6 bg-muted-foreground">
          <UserSignOutButton />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { TopbarUserDropdown }
