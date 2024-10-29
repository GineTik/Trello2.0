import { TypeUseGroupedTasksResultItem } from '@/hooks/tasks/use-grouped-tasks';
import { Droppable } from '@hello-pangea/dnd';
import BoardViewAddItem from '../add-item/BoardViewAddItem';
import BoardViewItem from '../item/BoardViewItem';
import styles from './BoardViewGroup.module.scss';

type BoardViewGroupProps = TypeUseGroupedTasksResultItem;

const BoardViewGroup = ({
  id,
  label,
  deadline,
  tasks,
}: BoardViewGroupProps) => {
  return (
    <Droppable droppableId={id}>
      {provided => (
        <div
          ref={provided.innerRef}
          className={styles.group}
          {...provided.droppableProps}
        >
          <div className={styles.group__header}>
            <span>
              {label} ({tasks?.length})
            </span>
          </div>
          {tasks?.map((item, index) => (
            <BoardViewItem key={index} index={index} {...item} />
          ))}
          {deadline && <BoardViewAddItem deadline={deadline} />}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default BoardViewGroup;
