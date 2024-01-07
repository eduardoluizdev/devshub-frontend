import { customerResource } from '@/resources/customers'

import { DataTableCustomer } from './data-table-customers'
import { dataTableCustomersColumns } from './data-table-customers-columns'

const ListCustomersTable = async () => {
  const customers = await customerResource.get()

  if (!customers) {
    return null
  }

  return (
    <DataTableCustomer columns={dataTableCustomersColumns} data={customers} />
  )
}

export default ListCustomersTable
