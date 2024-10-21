import { TypeBase } from './root.types'

export type TypeTimeBlock = TypeBase & {
	name: string
	color?: string
	duration: number
	order: number
}

export type TypeTimeBlockFormState = Partial<
	Omit<TypeTimeBlock, 'createdAt' | 'updatedAt'>
>
