'use client'
import { getPost } from "@/app/table/page"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useQuery } from "@tanstack/react-query"



export default  function PostPage() {
    const {data:queryData} = useQuery({ queryKey: ['post'], queryFn: getPost })

    const data = queryData?.data.map((datas) => (
        {
            id: datas?.id || '',
            userId: datas?.userId?.toString() || '',
            title: datas?.title,
            body: datas?.body,
        }
    ))

  return (
    <div className="container  mx-auto py-5">
      {data && <DataTable  columns={columns} data={data} />}
    </div>
  )
}
