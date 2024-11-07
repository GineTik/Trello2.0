import Heading from '@/components/ui/heading/Heading';
import dayjs from 'dayjs';
import styles from './HomeDevLog.module.scss';
import { HomeDevLogItem } from './item/HomeDevLogItem';

type HomeDevLogProps = {};

export const HomeDevLog = ({}: HomeDevLogProps) => {
  return (
    <div className={styles.devlog}>
      <Heading tag='h2'>Devlog</Heading>
      <div className={styles.devlog__section}>
        <Heading tag='h3'>Todo</Heading>
        <HomeDevLogItem status='todo' text='Email confirmation functionality' />
        <HomeDevLogItem status='todo' text='Caching by redis' />
        <HomeDevLogItem status='todo' text='CI/CD using Github actions' />
        <HomeDevLogItem
          status='todo'
          text='Manage devlog information using admin panel'
        />
        <HomeDevLogItem
          status='todo'
          text='Manage sidebar information using admin panel'
        />
        <HomeDevLogItem status='todo' text='Create the time blocks page' />
        <HomeDevLogItem
          status='todo'
          text='Create the pomodoro timer functionality'
        />
      </div>
      <div className={styles.devlog__section}>
        <Heading tag='h3'>Bugs&Problems</Heading>
        <HomeDevLogItem
          status='bugs'
          text='Name input of a task card have only one line (need change to the textbox)'
        />
        <HomeDevLogItem
          status='bugs'
          text='If an user quickly changes a second field after updating another field, the other field does not update (this bug only occurs on the task page; in settings, everything works correctly, I fixed it)'
        />
      </div>
      <div className={styles.devlog__section}>
        <Heading tag='h3'>Do next</Heading>
        <HomeDevLogItem
          status='todo'
          text='Add demo account without email confirmation'
        />
      </div>
      <div className={styles.devlog__section}>
        <Heading tag='h3'>Soon</Heading>
        <HomeDevLogItem status='soon' text='Dashboard page with statistics' />
      </div>
      <div className={styles.devlog__section}>
        <Heading tag='h3'>Done</Heading>
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-11-7')}
          text='Wrote home page'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-11-4')}
          text='Deploy website and buy domain'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-11-3')}
          text='Wrote dockerfiles and docker-compose.yaml'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-11-1')}
          text='Optimized requests to the server using redux and tanstack query'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-11-1')}
          text='Added redux'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-30')}
          text='Removed necessary buttons and other elements'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-29')}
          text='Fixed bug with authentication: user cant pass to a guarded page after authentication without reloading the page'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-28')}
          text='Moved all logics to hooks'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-26')}
          text='Added sorting functionality for tasks'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-26')}
          text='Added board view to tasks page'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-25')}
          text='Created tasks functionality with list view'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-21')}
          text='Created template of home, dashboard, tasks and other pages'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-20')}
          text='Added sidebar'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-19')}
          text='Wrote auth page with authentication functionality'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-17')}
          text='Created services and hooks for authentication'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-16')}
          text='Created CRUD operation of time blocks'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-16')}
          text='Created CRUD operation of tasks'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-15')}
          text='Authentication using JWT'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-14')}
          text='Configured projects: create folder structure, install packages and other'
        />
        <HomeDevLogItem
          status='done'
          date={dayjs('2024-10-14')}
          text='Start of the project'
        />
      </div>
    </div>
  );
};
