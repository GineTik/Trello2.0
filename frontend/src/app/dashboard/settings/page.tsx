import {
  PageDescription,
  PageHeader,
  PageHeaderRow,
} from '@/components/dashboard-layout/page-header/PageHeader';
import { Settings } from '@/components/dashboard-layout/settings/Settings';
import Heading from '@/components/ui/heading/Heading';
import type { Metadata } from 'next';
import styles from './page.module.scss';

const PAGE_TITLE = 'Settings';
const PAGE_DESCRIPTION = 'Update user data or other settings';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

const SettingsPage = () => {
  return (
    <div className={styles.page}>
      <PageHeader>
        <PageHeaderRow>
          <div>
            <Heading>{PAGE_TITLE}</Heading>
            <PageDescription>{PAGE_DESCRIPTION}</PageDescription>
          </div>
        </PageHeaderRow>
      </PageHeader>
      <Settings />
    </div>
  );
};

export default SettingsPage;
