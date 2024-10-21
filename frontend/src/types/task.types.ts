import { TypeBase } from './root.types'

export enum EnumTaskPriority {
	low = 'low',
	medium = 'medium',
	high = 'high'
}

export type TypeTask = TypeBase & {
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

export type TypeUpdateTaskForm = Partial<Omit<TypeTask, 'id' | 'updatedAt'>>
