import { $api } from '@/api/interceptors';
import { TypeUpdateUserForm } from '@/types/user.types';

class UserService {
  async getProfile() {
    return await $api.get('/user/profile');
  }

  async update(data: TypeUpdateUserForm) {
    return await $api.patch('/user/profile', data);
  }
}

export const userService = new UserService();
