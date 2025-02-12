'use client'
import { getPost } from "@/services/api"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useQuery } from "@tanstack/react-query"
import { Input } from "../ui/input"
import { useState } from "react"
import { CreateModal } from "../Modal/CreateModal"
import { SelectFilter } from "./SelectFIlter"


export type filterKeys = 'title' | 'body'

export default function PostPage() {
  const { data: queryData, isLoading } = useQuery({ queryKey: ['post'], queryFn: getPost })
  const [filterBy, setFilterBy] = useState<filterKeys>("title")
  const [filter, setFilter] = useState("")

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  const data = queryData?.data.map((datas) => (
    {
      id: datas?.id || '',
      userId: datas?.userId?.toString() || '',
      title: datas?.title,
      body: datas?.body,
    }
  ))

  const filteredData = data?.filter((item) =>
    item[filterBy]?.toLowerCase().toString().includes(filter.toLowerCase().toString())
  )

  return (
    <div className="container  mx-auto py-5 ">
      <div className="flex max-md:flex-col items-center justify-between py-4">
        <div className="flex items-center justify-between gap-8 py-4">
          <Input
            placeholder={`Filter ${filterBy}...`}
            value={filter}
            onChange={handleFilterChange}
            className="max-w-sm"
          />
          <SelectFilter currentValue={filterBy} setValue={setFilterBy} />
        </div>
        <CreateModal />
      </div>

      <DataTable columns={columns} data={filteredData ? filteredData : []} isLoading={isLoading} />
    </div>
  )
}
