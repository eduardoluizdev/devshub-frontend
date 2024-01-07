import { customerResource } from '@/resources/customers'

import { DataTableCustomer } from './data-table-customers'
import { dataTableCustomersColumns } from './data-table-customers-columns'

const ListCustomersTable = async () => {
  const initialCustomers = await customerResource.getAll('server')

  return (
    <DataTableCustomer
      columns={dataTableCustomersColumns}
      initialData={initialCustomers}
    />
  )
}

export default ListCustomersTable
