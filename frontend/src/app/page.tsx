import { HomeContacts } from '@/components/home-layout/contacts/HomeContacts';
import { HomeDevLog } from '@/components/home-layout/devlog/HomeDevLog';
import { HomeGuide } from '@/components/home-layout/guide/HomeGuide';
import { HomeIntroduction } from '@/components/home-layout/introduction/HomeIntroduction';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className=''>
      <div className={styles.home}>
        <HomeIntroduction />
        <HomeContacts />
        <HomeGuide />
        <HomeDevLog />
      </div>
    </div>
  );
}
