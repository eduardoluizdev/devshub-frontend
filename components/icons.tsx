import { icons, LucideProps } from 'lucide-react'

type IconProps = LucideProps & {
  name: keyof typeof icons
  size?: number
  props?: LucideProps
}

export default function Icon({ name, size, props }: IconProps) {
  const LucideIcon = icons[name]

  return <LucideIcon size={size} {...props} />
}
