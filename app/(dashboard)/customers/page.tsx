import { PageHeader } from '@/components/page-header'
import { customerResource } from '@/resources/customers'

import { CreateCustomerDrawer } from './components/create-customer-drawer'
import ListCustomersTable from './components/list-customers-table'

export default async function Customers() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Clientes" subtitle="Gerêncie seus clientes" />
      <CreateCustomerDrawer />
      <ListCustomersTable />
    </div>
  )
}
