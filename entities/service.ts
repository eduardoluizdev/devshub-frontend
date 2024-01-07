export enum ServiceRenewalType {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export interface Service {
  name: string
  price: number
  renewal: ServiceRenewalType
}
