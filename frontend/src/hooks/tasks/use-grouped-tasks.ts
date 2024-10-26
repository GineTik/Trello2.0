import { TASK_GROUPS_ARRAY } from '@/config/task.config';
import { TypeTask } from '@/types/task.types';
import { useTasks } from './use-tasks';

export type TypeUseGroupedTasksResultItem = {
  id: string;
  label: string;
  deadline: Date;
  tasks: TypeTask[] | undefined;
  noAddTaskButton?: boolean;
};

export type TypeUseGroupedTasksResult = TypeUseGroupedTasksResultItem[];

export function useGroupedTasks() {
  const { allTasks, allTasksIsLoading } = useTasks();

  const groupedTasks = TASK_GROUPS_ARRAY.reduce<TypeUseGroupedTasksResult>(
    (result, item) => {
      const { filterTasks, deadline, ...otherFields } = item;

      result.push({
        ...otherFields,
        deadline: deadline.toDate(),
        tasks: filterTasks(allTasks),
      });

      return result;
    },
    [],
  );

  return { groupedTasks, allTasksIsLoading };
}
