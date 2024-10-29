'use client';
import {
  PageHeader,
  PageHeaderRow,
} from '@/components/dashboard-layout/page-header/PageHeader';
import Profile from '@/components/dashboard-layout/profile/Profile';
import { Button } from '@/components/ui/button/Button';
import { SidebarTrigger } from '@/components/ui/sidebar/Sidebar';
import { HiMiniEllipsisVertical } from 'react-icons/hi2';

const AppHeader = () => {
  return (
    <PageHeader className=''>
      <PageHeaderRow className='justify-between'>
        <div>
          <SidebarTrigger />
        </div>
        <div className='flex gap-2'>
          <Profile />
          <Button size='cube'>
            <HiMiniEllipsisVertical />
          </Button>
        </div>
      </PageHeaderRow>
    </PageHeader>
  );
};

export default AppHeader;
