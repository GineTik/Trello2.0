import { HomeContacts } from '@/components/home-layout/contacts/HomeContacts';
import { HomeIntroduction } from '@/components/home-layout/introduction/HomeIntroduction';

export default function Home() {
  return (
    <div className=''>
      <div className='flex flex-col gap-2 items-start'>
        {/* Trello2.0
            Description
            Github and contacts
            Guide&Features
            Dev log
            */}

        <HomeIntroduction />
        <HomeContacts />
        {/* <HomeGuide />
        <HomeDevLog /> */}
      </div>
    </div>
  );
}
