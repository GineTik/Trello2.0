import {
  getAccessToken,
  removeAccessTokenFromStorage,
  saveAccessTokenToStorage,
} from '@/services/auth-token.service';
import { authService } from '@/services/auth.service';
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
const JWT_EXPIRED = 'jwt expired';
const JWT_MUST_BE_PROVIDED = 'jwt must be provided';

export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
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

const refreshAuthLogic = async (failedRequest: any) => {
  const accessToken = getAccessToken();

  if (!accessToken) return Promise.resolve();

  return authService
    .refresh()
    .then(tokenRefreshResponse => {
      saveAccessTokenToStorage(tokenRefreshResponse.data.accessToken);
      failedRequest.response.config.headers['Authorization'] =
        'Bearer ' + tokenRefreshResponse.data.accessToken;
      return Promise.resolve();
    })
    .catch(e => {
      removeAccessTokenFromStorage();
      return Promise.reject(e);
    });
};

// Instantiate the interceptor
createAuthRefreshInterceptor($api, refreshAuthLogic);
