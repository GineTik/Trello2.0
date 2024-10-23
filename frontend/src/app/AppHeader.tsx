'use client'
import { Button } from "@/components/button/Button"
import { PageHeader, PageHeaderRow } from "@/components/page-header/PageHeader"
import Profile from "@/components/profile/Profile"
import { SidebarTrigger } from "@/components/sidebar/Sidebar"
import { HiMiniEllipsisVertical } from "react-icons/hi2"

const AppHeader = () => {
  return (
    <PageHeader className="">
        <PageHeaderRow className="justify-between">
          <div>
            <SidebarTrigger />
          </div>
          <div className="flex gap-2">
            <Profile />
            <Button size="cube">
              <HiMiniEllipsisVertical />
            </Button>
          </div>
        </PageHeaderRow>
      </PageHeader>
  )
}

export default AppHeader
