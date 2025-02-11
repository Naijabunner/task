"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Eye, Pen, Trash2 } from "lucide-react"
import { MdMoreVert } from "react-icons/md"
import { ViewModal } from "../Modal/ViewModal"
import { EditModal } from "../Modal/EditModal"
import { DeleteModal } from "../Modal/DeleteModal"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<post>[] = [
  {
    accessorKey: "id",
    header: "UserId",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "body",
    header: "Post",
  },

  {
    accessorKey: "action",
    header: 'Action',
    cell: ({ row }) => (
      <ActionsComponent 
      data={
        row.original
      } />
    ),
  },
]

const ActionsComponent = ({data}:{ data:post}) => {


  const handleView = () => { 
    console.log('View clicked')

  }

  const handleEdit = () => { 
    console.log('Edit clicked')
   
  }

  const handleDelete = () => { 
    console.log('Delete clicked')
  
  }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-0 outline-none">
            <span className="sr-only">Open menu</span>
            <MdMoreVert className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align="end" className="shadow-xl space-y-2">
          <DropdownMenuItem asChild  className="flex justify-between">
           <ViewModal data={data}/>     
          </DropdownMenuItem>
  
          <DropdownMenuItem asChild className="flex justify-between">
            <EditModal data={data}/>
          </DropdownMenuItem>
  
          <DropdownMenuItem asChild className="flex justify-between">
            <DeleteModal data={data}/>
          </DropdownMenuItem>
  
        </DropdownMenuContent>
      </DropdownMenu>
    )
}