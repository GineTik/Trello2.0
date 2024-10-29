import { Button } from '@/components/ui/button/Button';
import { Checkbox } from '@/components/ui/form/checkbox/Checkbox';
import { SelectItem } from '@/components/ui/select/Select';
import { useTasks } from '@/hooks/tasks/use-tasks';
import { cn } from '@/lib/utils';
import { EnumTaskPriority, TypeTask } from '@/types/task.types';
import { Draggable } from '@hello-pangea/dnd';
import { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import TaskColorField from '../../list/fields/color/TaskColorField';
import TaskSelectField from '../../list/fields/select/TaskSelectField';
import TaskTextField from '../../list/fields/text/TaskTextField';
import styles from './BoardViewItem.module.scss';

type BoardViewItemProps = TypeTask & {
  index: number;
};

const BoardViewItem = ({
  id,
  name,
  priority,
  isCompleted,
  color,
  index,
}: BoardViewItemProps) => {
  const [actualColor, setActualColor] = useState(color);
  const { removeTask, updateField, removeIsPending } = useTasks();

  return (
    <Draggable index={index} draggableId={id}>
      {provided => (
        <div
          className={cn(styles.item)}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div
            className={styles.item__background}
            style={{
              background: actualColor ?? '',
            }}
          ></div>
          <div className={styles.item__header}>
            <Checkbox
              className={styles.item__checkbox}
              defaultChecked={isCompleted}
              onCheckedChange={checked =>
                updateField(id, 'isCompleted', checked)
              }
            />
            <TaskTextField
              className={styles.item__name}
              defaultValue={name}
              placeholder='set the name...'
              onChange={e => updateField(id, 'name', e.currentTarget.value)}
            />
            <Button
              variant='no_background'
              size='cube_sm'
              className={styles.item__trash}
              onClick={() => removeTask(id)}
              isLoading={removeIsPending}
            >
              <BiTrash />
            </Button>
          </div>
          <span className={styles.item__priority}>
            <TaskSelectField
              defaultValue={priority ?? ''}
              placeholder='set the priority...'
              onValueChange={value => updateField(id, 'priority', value)}
            >
              <SelectItem value={EnumTaskPriority.low}>
                <span
                  className={cn(styles.item__barge, styles.item__barge_low)}
                >
                  low
                </span>
              </SelectItem>
              <SelectItem value={EnumTaskPriority.medium}>
                <span
                  className={cn(styles.item__barge, styles.item__barge_medium)}
                >
                  medium
                </span>
              </SelectItem>
              <SelectItem value={EnumTaskPriority.high}>
                <span
                  className={cn(styles.item__barge, styles.item__barge_high)}
                >
                  high
                </span>
              </SelectItem>
            </TaskSelectField>
          </span>
          <TaskColorField
            defaultValue={actualColor ?? ''}
            className={styles.item__edit_color}
            onValueChange={value => {
              updateField(id, 'color', value);
              setActualColor(value);
            }}
          />
        </div>
      )}
    </Draggable>
  );
};

export default BoardViewItem;
