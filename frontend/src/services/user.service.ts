import { $api } from '@/api/interceptors';

class UserService {
  async getProfile() {
    return (await $api.get('/user/profile'))?.data;
  }
}

export const userService = new UserService();
