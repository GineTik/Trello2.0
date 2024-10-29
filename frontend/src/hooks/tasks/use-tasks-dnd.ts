import { TASK_GROUPS } from '@/config/task.config';
import { DropResult } from '@hello-pangea/dnd';
import { useCallback } from 'react';
import { useTasks } from './use-tasks';

type TypeGroupFields = keyof typeof TASK_GROUPS;

export function useTaskDnd() {
  const { updateTask } = useTasks();

  const onDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;

    const destinationColumnId = result.destination.droppableId;

    if (destinationColumnId === result.source.droppableId) return;

    const deadline =
      TASK_GROUPS[destinationColumnId as TypeGroupFields].deadline.format();

    updateTask({
      id: result.draggableId,
      deadlineDate: new Date(deadline),
    });
  }, []);

  return { onDragEnd };
}
