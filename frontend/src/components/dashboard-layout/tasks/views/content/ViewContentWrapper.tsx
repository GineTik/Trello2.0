import { TabsContent } from '@/components/ui/tabs/Tabs';
import { useTaskDnd } from '@/hooks/tasks/use-tasks-dnd';
import { cn } from '@/lib/utils';
import { DragDropContext } from '@hello-pangea/dnd';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import styles from './ViewContentWrapper.module.scss';

type ViewContentWrapperProps = PropsWithChildren &
  ComponentPropsWithoutRef<typeof TabsContent>;

const ViewContentWrapper = ({
  className,
  ...props
}: ViewContentWrapperProps) => {
  const { onDragEnd } = useTaskDnd();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TabsContent className={cn(styles.wrapper, className)} {...props} />
    </DragDropContext>
  );
};

export default ViewContentWrapper;
