"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"

interface DataTableProps<post, TValue> {
  columns: ColumnDef<post, TValue>[]
  data: post[] | [],
  isLoading: boolean
}

export function DataTable<post, TValue>({
  columns,
  isLoading,
  data,
}: DataTableProps<post, TValue> & { isLoading: boolean }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  },
  )

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader className=" bg-primary/90 rounded-md hover:bg-primary/90">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className=" text-white">
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
          {isLoading ? (
            <DataTableSkeleton arr={table.getHeaderGroups()[0]?.headers.length || 0} /> 
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 pr-4 pt-5">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export function DataTableSkeleton({ arr }:{ arr: number}) {
  return (
    <>
      {Array.from({length:arr}).map((_,index) => (
        <TableRow key={index} className="">
          {Array.from({length:arr}).map((_,index) => (
            <TableCell key={index} className="py-5">
              <div className="h-4 w-[80%] bg-gray-200 animate-pulse rounded" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  )
}
