import Cookies from 'js-cookie';

export const ACCESS_TOKEN_COOKIE = 'accessToken';
export const REFRESH_TOKEN_COOKIE = 'refreshToken';

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN_COOKIE) ?? null;
};

export const saveAccessTokenToStorage = (accessToken: string) => {
  Cookies.set(ACCESS_TOKEN_COOKIE, accessToken, {
    domain: process.env.NEXT_PUBLIC_FRONTEND_DOMAIN,
    sameSite: 'strict',
    expires: 1,
  });
};

export const removeAccessTokenFromStorage = () => {
  Cookies.remove(ACCESS_TOKEN_COOKIE, {
    domain: process.env.NEXT_PUBLIC_FRONTEND_DOMAIN,
    sameSite: 'strict',
  });
};
