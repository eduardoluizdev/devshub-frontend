import Icon from './icons'

const Logo = () => {
  return (
    <div className="logo">
      <div className="flex items-center gap-3 text-lg text-foreground">
        <Icon name="Waypoints" className="h-5 w-5" />
        <span className="font-semibold">devshub.io</span>
      </div>
    </div>
  )
}

export { Logo }
