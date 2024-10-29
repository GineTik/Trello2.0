'use client';

import { Tabs, TabsList } from '@/components/ui/tabs/Tabs';
import { VIEWS } from '@/config/views.config';
import { useTasks } from '@/hooks/tasks/use-tasks';
import { FaListUl } from 'react-icons/fa';
import { HiViewBoards } from 'react-icons/hi';
import { LuLoader2 } from 'react-icons/lu';
import BoardViewContent from './content/board/BoardViewContent';
import ListViewContent from './content/list/ListViewContent';
import TaskViewsItem from './item/TaskViewsItem';
import styles from './TaskViews.module.scss';

const TaskViews = () => {
  const { allTasksIsLoading } = useTasks();

  return (
    <Tabs className={styles.views} defaultValue={VIEWS.LIST}>
      <TabsList className={styles.views_tabs}>
        <TaskViewsItem value={VIEWS.LIST}>
          <FaListUl /> List
        </TaskViewsItem>
        <TaskViewsItem value={VIEWS.BOARD}>
          <HiViewBoards /> Board
        </TaskViewsItem>
      </TabsList>
      {allTasksIsLoading && (
        <div className='p-4 w-full'>
          <LuLoader2 className='animate-spin mx-auto text-white' />
        </div>
      )}
      {!allTasksIsLoading && (
        <>
          <ListViewContent />
          <BoardViewContent />
        </>
      )}
    </Tabs>
  );
};

export default TaskViews;
