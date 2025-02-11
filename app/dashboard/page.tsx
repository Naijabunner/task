import { AppSidebar } from "@/components/app-sidebar"
import PostPage from "@/components/Table/PostTable"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { StickyNote, User } from "lucide-react"
import React from "react"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="">
                    All Post
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">

          <div className=" grid md:grid-cols-2 gap-5">
            <div className="w-full h-[200px]  relative rounded-xl  bg-muted/50 overflow-hidden" >
              <h3 className=" text-[100px] font-medium">
                100
                <span className=" text-sm lg:text-xl ">Posts</span>
              </h3>
              <StickyNote className=" absolute -bottom-4 right-0 -rotate-45 opacity-70 stroke-blue-500 size-32 xl:size-64" />
            </div>
            <div className="w-full h-[200px]  relative rounded-xl  bg-muted/50 overflow-hidden" >
              <h3 className=" text-[100px]  font-medium">
                10
                <span className=" text-sm lg:text-xl ">Users</span>
              </h3>
              <User className=" absolute -bottom-4 right-0 -rotate-45 opacity-70 stroke-blue-500 size-32 xl:size-64" />
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min px-5" >
            <PostPage />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
