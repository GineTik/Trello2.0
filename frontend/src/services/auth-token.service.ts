import Cookies from 'js-cookie'

const ACCESS_TOKEN_COOKIE = 'accessToken'
const REFRESH_TOKEN_COOKIE = 'refreshToken'

export const getAccessToken = () => {
	return Cookies.get(ACCESS_TOKEN_COOKIE) ?? null
}

export const saveAccessTokenToStorage = (accessToken: string) => {
	Cookies.set(ACCESS_TOKEN_COOKIE, accessToken, {
		domain: 'localhost',
		sameSite: 'strict',
		expires: 1
	})
}
export const removeAccessTokenFromStorage = () => {
	Cookies.remove(ACCESS_TOKEN_COOKIE)
}
