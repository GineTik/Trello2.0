import GlobalLoader from "@/components/global-loader/GlobalLoader";
import Logo from "@/components/logo/Logo";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/sidebar/Sidebar";
import { ROUTES } from "@/config/routes.config";
import Link from "next/link";
import { BiHomeSmile } from "react-icons/bi";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlineTaskAlt } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";

type TypeItem = {
    title: string
    url: string
    icon: React.ReactNode
}

const items: TypeItem[] = [
    {
      title: "Home",
      url: ROUTES.HOME,
      icon: <BiHomeSmile />,
    },
    {
      title: "Dashboard",
      url: ROUTES.DASHBOARD,
      icon: <IoIosStats />,
    },
    {
      title: "Tasks",
      url: ROUTES.TASKS,
      icon: <MdOutlineTaskAlt />,
    },
    {
      title: "Time blocks",
      url: ROUTES.TIME_BLOCKS,
      icon: <FiAlignJustify />,
    },
    {
        title: "Pomodoro timer",
        url: ROUTES.POMODORO_TIMER,
        icon: <RiTimerLine />,
    },
    {
      title: "Settings",
      url: ROUTES.SETTINGS,
      icon: <LuSettings2 />,
    },
  ]
  

const AppSidebar = () => {
  return (
    <Sidebar>
        <SidebarHeader className="flex flex-row gap-2 items-center justify-start">
            <Logo />
            <GlobalLoader />
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
            {items.map(({title, url, icon}: TypeItem) => (
                <SidebarMenuItem key={title}>
                    <Link href={url} className="flex justify-start items-center px-2 py-1 text-white/50 hover:text-white transition gap-2 text-[1rem]">
                        {icon}
                        <span>{title}</span>
                    </Link>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
        </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
