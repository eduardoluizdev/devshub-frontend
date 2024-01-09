'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Service } from '@/entities/service'

type ServiceWithCustomer = Service & {
  customer: {
    name: string
  }
}

const dataTableCustomersColumns: ColumnDef<ServiceWithCustomer>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'price',
    header: 'Preço',
  },
  {
    accessorKey: 'renewal',
    header: 'Renovação',
  },
  {
    accessorKey: 'customer',
    header: 'Clientes',
    cell: ({ row }) => {
      const customer = row.original.customer ? row.original.customer : null

      return (
        <div className="flex gap-2">
          {customer && (
            <span className="bg-muted-foreground p-1 rounded text-primary-foreground">
              {customer.name}
            </span>
          )}
        </div>
      )
    },
  },
]

export { dataTableCustomersColumns }
