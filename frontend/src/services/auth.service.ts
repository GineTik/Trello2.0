import { $api } from '@/api/interceptors'
import { TypeAuth, TypeAuthResponse, TypeUser } from '@/types/user.types'
import { saveAccessTokenToStorage } from './auth-token.service'

class AuthService {
	async main(type: 'login' | 'registration', data: TypeAuth) {
		const response = await $api.post<TypeAuthResponse>(`/auth/${type}`)

		if (response.data.accessToken)
			saveAccessTokenToStorage(response.data.accessToken)

		return response
	}

	async refresh() {
		const response = await $api.post<TypeUser>('/auth/refresh')
		return response.data
	}
}

export const authService = {
	main: async (type: 'login' | 'registration', data: TypeAuth) => {
		const response = await $api.post<TypeAuthResponse>(`/auth/${type}`, data)

		if (response.data.accessToken)
			saveAccessTokenToStorage(response.data.accessToken)

		return response.data
	},
	refresh: async () => $api.post<TypeUser>('/auth/refresh')
}
