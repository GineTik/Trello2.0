import { $api } from '@/api/interceptors'
import { TypeUpdateTaskForm } from '@/types/task.types'

class TaskService {
	async getAll() {
		return (await $api.get('/tasks')).data
	}

	async getById(id: string) {
		return (await $api.get(`/tasks/${id}`)).data
	}

	async create() {
		return (await $api.post('/tasks')).data
	}

	async update(id: string, data: TypeUpdateTaskForm) {
		return (await $api.post(`/tasks/${id}`, data)).data
	}

	async remove(id: string) {
		return (await $api.delete(`/tasks/${id}`)).data
	}
}
