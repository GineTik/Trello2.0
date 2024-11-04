import { NextRequest, NextResponse } from 'next/server';
import { ROUTES } from './config/routes.config';
import { ACCESS_TOKEN_COOKIE } from './services/auth-token.service';

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;
  const accessToken = cookies.get(ACCESS_TOKEN_COOKIE)?.value;

  const isAuthPage = url.includes(ROUTES.AUTH);

  if (isAuthPage && accessToken) {
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD, url));
  }

  if (isAuthPage) {
    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL(ROUTES.AUTH, url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [`/dashboard/:path*`, `/auth/:path`],
};
