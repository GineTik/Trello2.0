import { $api } from '@/api/interceptors';
import { TypeAuthForm, TypeAuthResponse } from '@/types/user.types';

class AuthService {
  async main(type: 'login' | 'registration', data: TypeAuthForm) {
    return $api.post<TypeAuthResponse>(`/auth/${type}`, data);
  }

  async refresh() {
    return $api.post<TypeAuthResponse>('/auth/refresh');
  }

  async logout() {
    await $api.post('/auth/logout');
  }
}

export const authService = new AuthService();
