import { DEBOUNCE_DELAY } from '@/config/debounce.config';
import { taskService } from '@/services/task.service';
import { TypeTask, TypeUpdateTaskForm } from '@/types/task.types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import _debounce from 'lodash.debounce';
import { useCallback } from 'react';
import { toast } from 'sonner';

const GET_ALL_TASKS_KEY = 'get all tasks';

export function useTasks() {
  const queryClient = useQueryClient();

  const { data: allTasksResponse, isLoading: allTasksIsLoading } = useQuery<
    AxiosResponse<TypeTask[]>
  >({
    queryKey: [GET_ALL_TASKS_KEY],
    queryFn: () => taskService.getAll(),
  });

  const { mutate: updateTask } = useMutation({
    mutationKey: ['update task'],
    mutationFn: (data: TypeUpdateTaskForm) => taskService.update(data),
  });

  const { mutate: createTask, isPending: createIsPending } = useMutation({
    mutationKey: ['create task'],
    mutationFn: (date: Date) =>
      taskService.create(date).then(response => {
        queryClient.invalidateQueries({ queryKey: [GET_ALL_TASKS_KEY] });
        return response;
      }),
  });

  const updateFieldCallback = useCallback(
    (id: string, fieldName: keyof TypeUpdateTaskForm, fieldValue: any) => {
      updateTask({
        id,
        [fieldName]: fieldValue,
      });
    },
    [],
  );

  const updateField = useCallback(
    _debounce(updateFieldCallback, DEBOUNCE_DELAY),
    [],
  );

  const { mutate: removeTask, isPending: removeIsPending } = useMutation({
    mutationKey: ['delete task'],
    mutationFn: (id: string) => taskService.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_TASKS_KEY] });
      toast.success('Successfully!');
    },
  });

  const allTasks = allTasksResponse?.data?.sort((a, b) => {
    return new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()
      ? 1
      : -1;
  });

  return {
    allTasks,
    allTasksIsLoading,
    updateTask,
    createTask,
    createIsPending,
    updateField,
    removeTask,
    removeIsPending,
  };
}
