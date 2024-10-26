import { $api } from '@/api/interceptors';
import { TypeAuthForm, TypeAuthResponse } from '@/types/user.types';
import { saveAccessTokenToStorage } from './auth-token.service';

class AuthService {
  async main(type: 'login' | 'registration', data: TypeAuthForm) {
    const response = await $api.post<TypeAuthResponse>(`/auth/${type}`, data);

    if (response.data.accessToken)
      saveAccessTokenToStorage(response.data.accessToken);

    return response;
  }

  async refresh() {
    return $api.post<TypeAuthResponse>('/auth/refresh');
  }

  async logout() {
    await $api.post('/auth/logout');
  }
}

export const authService = new AuthService();
