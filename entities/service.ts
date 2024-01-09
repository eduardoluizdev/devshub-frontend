import { Customer } from './customer'

export enum ServiceRenewalType {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export interface Service {
  customerId: string
  name: string
  price: number
  renewal: ServiceRenewalType
}
