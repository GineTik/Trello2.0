import { $api } from '@/api/interceptors';
import { TypeUpdateTaskForm } from '@/types/task.types';

class TaskService {
  async getAll() {
    return await $api.get('/user/tasks');
  }

  async getById(id: string) {
    return await $api.get(`/user/tasks/${id}`);
  }

  async create(deadlineDate: Date) {
    return await $api.post('/user/tasks', {
      deadlineDate,
    });
  }

  async update({ id, ...data }: TypeUpdateTaskForm) {
    return await $api.patch(`/user/tasks/${id}`, data);
  }

  async remove(id: string) {
    return await $api.delete(`/user/tasks/${id}`);
  }
}

export const taskService = new TaskService();
