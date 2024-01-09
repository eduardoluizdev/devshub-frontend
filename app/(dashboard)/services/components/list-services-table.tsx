import { serviceResource } from '@/resources/services'

import { DataTableService } from './data-table-services'
import { dataTableCustomersColumns } from './data-table-services-columns'

const ListServicesTable = async () => {
  const initialservices = await serviceResource.getAll('server')

  return (
    <DataTableService
      columns={dataTableCustomersColumns}
      initialData={initialservices}
    />
  )
}
export { ListServicesTable }
