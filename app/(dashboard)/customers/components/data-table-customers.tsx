'use client'

import { useQuery } from '@tanstack/react-query'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { customerResource } from '@/resources/customers'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  initialData: TData[]
}

const DataTableCustomer = <TData, TValue>({
  columns,
  initialData,
}: DataTableProps<TData, TValue>) => {
  const { data, isSuccess } = useQuery({
    queryKey: ['customers'],
    queryFn: () => customerResource.getAll('client'),
    initialData,
  })

  const table = useReactTable({
    data: data?.customers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isSuccess ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Carregando...
              </TableCell>
            </TableRow>
          )}
          {/* {isFetching && (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">

              </TableCell>
            </TableRow>
          )} */}
        </TableBody>
      </Table>
    </div>
  )
}

export { DataTableCustomer }
