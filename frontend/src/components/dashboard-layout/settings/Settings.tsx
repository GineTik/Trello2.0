'use client';

import { SettingsBlock } from '@/components/dashboard-layout/settings/block/SettingsBlock';
import { Button } from '@/components/ui/button/Button';
import Heading from '@/components/ui/heading/Heading';
import { toast } from 'sonner';
import { SettingsUserForm } from './user-form/SettingsUserForm';

type SettingsProps = {};

export const Settings = ({}: SettingsProps) => {
  return (
    <div>
      <SettingsBlock>
        <Heading tag='h4'>User settings</Heading>
        <SettingsUserForm />
      </SettingsBlock>
      <SettingsBlock>
        <Heading tag='h4'>Other settings</Heading>
        <Button
          className='mt-3 font-medium'
          size='sm'
          onClick={() => {
            toast.success('soon...');
          }}
        >
          Soon...
        </Button>
      </SettingsBlock>
    </div>
  );
};
