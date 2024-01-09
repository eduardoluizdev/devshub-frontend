import { Customer } from './customer'

export enum ServiceRenewalType {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export interface Service {
  id?: string
  name: string
  price: number
  renewal: ServiceRenewalType
  customerId: string | undefined
}
