import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area/ScrollArea';
import { VIEWS } from '@/config/views.config';
import { useGroupedTasks } from '@/hooks/tasks/use-grouped-tasks';
import ViewContentWrapper from '../ViewContentWrapper';
import BoardViewGroup from './group/BoardViewGroup';

const BoardViewContent = () => {
  const { groupedTasks } = useGroupedTasks();

  return (
    <ScrollArea className='h-full'>
      <ViewContentWrapper value={VIEWS.BOARD}>
        <div className='flex gap-2 px-2'>
          {groupedTasks?.map(item => <BoardViewGroup {...item} />)}
        </div>
      </ViewContentWrapper>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
};

export default BoardViewContent;
