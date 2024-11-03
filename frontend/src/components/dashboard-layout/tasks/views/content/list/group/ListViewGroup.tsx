import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion/Accordion';
import type { TypeUseGroupedTasksResultItem } from '@/hooks/tasks/use-grouped-tasks';
import { cn } from '@/lib/utils';
import { Droppable } from '@hello-pangea/dnd';
import { ComponentPropsWithoutRef } from 'react';
import ListViewAddItem from '../add-item/ListViewAddItem';
import ListViewItem from '../item/ListViewItem';
import styles from './ListViewGroup.module.scss';

type ListViewGroupProps = Omit<
  ComponentPropsWithoutRef<typeof AccordionItem>,
  'value'
> &
  TypeUseGroupedTasksResultItem;

const ListViewGroup = ({
  id,
  label,
  children,
  className,
  deadline,
  tasks,
  noAddTaskButton,
  ...props
}: ListViewGroupProps) => {
  return (
    <Droppable droppableId={id}>
      {provided => (
        <>
          <AccordionItem
            className={cn(styles.group, className)}
            value={label}
            {...props}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <AccordionTrigger className={styles.group__trigger}>
              {label} ({tasks?.length})
            </AccordionTrigger>
            <AccordionContent className={styles.group__content}>
              {tasks?.map((item, index) => (
                <ListViewItem key={item.id} index={index} {...item} />
              ))}
              {!noAddTaskButton && <ListViewAddItem date={deadline} />}
            </AccordionContent>
          </AccordionItem>

          {provided.placeholder}
        </>
      )}
    </Droppable>
  );
};

export default ListViewGroup;
