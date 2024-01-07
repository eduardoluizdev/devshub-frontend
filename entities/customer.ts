import { Service } from './service'

export interface Customer {
  id?: string
  name: string
  email: string
  phone: string
  sector: string
  services?: Service[]
}
