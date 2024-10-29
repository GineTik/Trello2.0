'use client';

import { Accordion } from '@/components/ui/accordion/Accordion';
import { VIEWS } from '@/config/views.config';
import { useGroupedTasks } from '@/hooks/tasks/use-grouped-tasks';
import ViewContentWrapper from '../ViewContentWrapper';
import ListViewGroup from './group/ListViewGroup';

const ListViewContent = () => {
  const { groupedTasks } = useGroupedTasks();

  return (
    <ViewContentWrapper value={VIEWS.LIST}>
      <Accordion
        type='multiple'
        defaultValue={['Today', 'Tomorrow', 'Within Week', 'Within Month']}
      >
        {groupedTasks?.map(item => <ListViewGroup {...item} />)}
      </Accordion>
    </ViewContentWrapper>
  );
};

export default ListViewContent;
