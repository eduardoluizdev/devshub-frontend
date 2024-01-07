import { PageHeader } from '@/components/page-header'

import { CreateCustomerDrawer } from './components/create-customer-drawer'

export default async function Customers() {
  return (
    <div>
      <PageHeader title="Clientes" subtitle="Gerêncie seus clientes" />

      <div className="mt-6">
        <CreateCustomerDrawer />
      </div>
    </div>
  )
}
