'use client'

import { ColumnDef } from '@tanstack/react-table'

import Icon from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Service } from '@/entities/service'

import { RemoveServiceModal } from './remove-service-modal'
import { ServiceModal } from './service-modal'

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
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => {
      const service = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icon name="MoreHorizontal" className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <ServiceModal service={service} type="view" />
            <ServiceModal service={service} type="edit" />
            <RemoveServiceModal
              serviceId={service.id!}
              customerId={service.customerId}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export { dataTableCustomersColumns }
