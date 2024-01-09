'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Service } from '@/entities/service'

const dataTableCustomersColumns: ColumnDef<Service>[] = [
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
]

export { dataTableCustomersColumns }
