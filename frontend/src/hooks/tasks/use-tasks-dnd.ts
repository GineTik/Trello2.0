import { TASKS_GROUP_FILTERS } from '@/config/task.config';
import { DropResult } from '@hello-pangea/dnd';
import { useCallback } from 'react';
import { useTasks } from './use-tasks';

export function useTaskDnd() {
  const { updateTask } = useTasks();

  const onDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;

    const destinationColumnId = result.destination.droppableId;

    if (destinationColumnId === result.source.droppableId) return;

    const deadline = TASKS_GROUP_FILTERS[destinationColumnId].format();

    updateTask({
      id: result.draggableId,
      deadlineDate: new Date(deadline),
    });
  }, []);

  return { onDragEnd };
}
