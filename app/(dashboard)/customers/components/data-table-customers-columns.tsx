'use client'

import { ColumnDef } from '@tanstack/react-table'

import Icon from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Customer } from '@/entities/customer'

import { CustomerModal } from './customer-modal'
import { RemoreCustomerModal } from './remove-customer-modal'

const dataTableCustomersColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Telefone/Whatsapp',
  },
  {
    accessorKey: 'sector',
    header: 'Setor',
  },
  {
    accessorKey: 'services',
    header: 'Serviços',
    cell: ({ row }) => {
      const customerServices = row.original.services

      return (
        <div className="flex gap-2">
          {customerServices?.map((service) => (
            <span
              key={`${service.customerId}--${service.name}`}
              className="bg-muted-foreground p-1 rounded text-primary-foreground"
            >
              {service.name}
            </span>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: ({ row }) => {
      const customer = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icon name="MoreHorizontal" className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <CustomerModal customer={customer} type="view" />
            <CustomerModal customer={customer} type="edit" />
            <RemoreCustomerModal customerId={customer.id!} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export { dataTableCustomersColumns }
