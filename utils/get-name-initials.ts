export const getNameInitials = (name: string) => {
  const splitName = name.split(' ')
  const initials = splitName.reduce((acc, name) => {
    return acc + name[0]
  }, '')

  return initials
}
