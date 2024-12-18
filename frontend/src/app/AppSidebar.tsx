import GlobalLoader from '@/components/ui/global-loader/GlobalLoader';
import Logo from '@/components/ui/logo/Logo';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar/Sidebar';
import { TypeSidebarMenuButton } from '@/components/ui/sidebar/sidebar-item.type';
import { ROUTES } from '@/config/routes.config';
import { BiHomeSmile } from 'react-icons/bi';
import { FiAlignJustify } from 'react-icons/fi';
import { IoIosStats } from 'react-icons/io';
import { LuSettings2 } from 'react-icons/lu';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { RiTimerLine } from 'react-icons/ri';

const items: TypeSidebarMenuButton[] = [
  {
    title: 'Home',
    url: ROUTES.HOME,
    icon: <BiHomeSmile />,
  },
  {
    title: 'Dashboard',
    url: ROUTES.DASHBOARD,
    icon: <IoIosStats />,
  },
  {
    title: 'Tasks',
    url: ROUTES.TASKS,
    icon: <MdOutlineTaskAlt />,
  },
  {
    title: 'Settings',
    url: ROUTES.SETTINGS,
    icon: <LuSettings2 />,
  },
  {
    title: 'Time blocks',
    url: ROUTES.TIME_BLOCKS,
    icon: <FiAlignJustify />,
    underDevelopment: true,
  },
  {
    title: 'Pomodoro timer',
    url: ROUTES.POMODORO_TIMER,
    icon: <RiTimerLine />,
    underDevelopment: true,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar className='bg-main-bg border-l border-white/10'>
      <SidebarHeader className='flex flex-row gap-2 items-center justify-start'>
        <Logo />
        <GlobalLoader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item: TypeSidebarMenuButton) => (
            <SidebarMenuButton key={item.title} {...item} />
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
