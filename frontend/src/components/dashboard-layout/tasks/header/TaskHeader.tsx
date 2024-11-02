'use client';

import {
  PageDescription,
  PageHeader,
  PageHeaderRow,
} from '@/components/dashboard-layout/page-header/PageHeader';
import { Button } from '@/components/ui/button/Button';
import Heading from '@/components/ui/heading/Heading';
import { TASK_GROUPS } from '@/config/task.config';
import { useTasks } from '@/hooks/tasks/use-tasks';
import { FiPlusSquare } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from './TaskHeader.module.scss';

const TaskHeader = () => {
  const { createTask, createIsPending } = useTasks();

  return (
    <PageHeader className={styles.header}>
      <PageHeaderRow className={styles.header__row}>
        <div className={styles.header__information}>
          <Heading tag='h1'>Trello 2.0 tasks board</Heading>
          <PageDescription className={styles.header__description}>
            Create and complete and manage your tasks using board or list views
          </PageDescription>
        </div>
        <div className={styles.header__actions}>
          <Button variant='default'>
            Sort
            <MdKeyboardArrowDown />
          </Button>
          <Button
            variant='accent'
            onClick={() => createTask(TASK_GROUPS.today.deadline.toDate())}
            isLoading={createIsPending}
          >
            <FiPlusSquare />
            Create a task
          </Button>
        </div>
      </PageHeaderRow>
    </PageHeader>
  );
};

export default TaskHeader;
