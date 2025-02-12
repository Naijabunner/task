"use client"

import * as React from "react"
import {
  BookOpen,
  Settings2,
  User,
  FileText,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavPosts } from "@/components/nav-posts"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Blog Admin",
    email: "admin@blog.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "Blog Team",
      logo: BookOpen,
      plan: "PRO",
    },
  ],

  posts: [
    {
      title: "Understanding React",
      url: "#",
      icon: FileText,
    },
    {
      title: "Advanced TypeScript",
      url: "#",
      icon: FileText,
    },
    {
      title: "Web Development Trends",
      url: "#",
      icon: FileText,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavPosts posts={data.posts} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
