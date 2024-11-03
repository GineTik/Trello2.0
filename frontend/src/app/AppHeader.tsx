'use client';
import {
  PageHeader,
  PageHeaderRow,
} from '@/components/dashboard-layout/page-header/PageHeader';
import Profile from '@/components/dashboard-layout/profile/Profile';
import { Button } from '@/components/ui/button/Button';
import { SidebarTrigger } from '@/components/ui/sidebar/Sidebar';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const AppHeader = () => {
  return (
    <PageHeader className=''>
      <PageHeaderRow className='justify-between'>
        <div>
          <SidebarTrigger />
        </div>
        <div className='flex gap-2'>
          <Profile />
          <Button size='sm' asChild>
            <Link href='https://github.com/GineTik/Trello2.0' target='_blank'>
              <FaGithub />
              Github
            </Link>
          </Button>
        </div>
      </PageHeaderRow>
    </PageHeader>
  );
};

export default AppHeader;
