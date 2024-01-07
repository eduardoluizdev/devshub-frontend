'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Customer } from '@/entities/customer'

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
  },
]

export { dataTableCustomersColumns }
