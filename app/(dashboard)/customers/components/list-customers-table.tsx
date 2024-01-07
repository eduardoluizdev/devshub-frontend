import { DataTableCustomer } from './data-table-customers'
import { dataTableCustomersColumns } from './data-table-customers-columns'

const ListCustomersTable = async () => {
  return <DataTableCustomer columns={dataTableCustomersColumns} />
}

export default ListCustomersTable
