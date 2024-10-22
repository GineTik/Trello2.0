import {
  getAccessToken,
  removeAccessTokenFromStorage,
} from '@/services/auth-token.service';
import { authService } from '@/services/auth.service';
import axios from 'axios';
import { takeErrorMessage } from './error';

const JWT_EXPIRED = 'jwt expired';
const JWT_MUST_BE_PROVIDED = 'jwt must be provided';

export const $api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

$api.interceptors.request.use(config => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

let isRetry = false;

$api.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;

    console.log(isRetry);
    if (
      (error?.response.status === 401 ||
        takeErrorMessage(error) == JWT_EXPIRED ||
        takeErrorMessage(error) == JWT_MUST_BE_PROVIDED) &&
      error.config &&
      !isRetry
    ) {
      isRetry = true;
      try {
        await authService.refresh();
        return $api.request(originalRequest);
      } catch (error) {
        if (takeErrorMessage(error) == JWT_EXPIRED)
          removeAccessTokenFromStorage();
      }
    } else {
      isRetry = false;
    }

    throw error;
  },
);

// const refreshAuthLogic = async (failedRequest: any) => {
//   return authService.refresh();
// };

// createAuthRefreshInterceptor($api, refreshAuthLogic);
