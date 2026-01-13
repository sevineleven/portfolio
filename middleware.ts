import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 정적 파일과 API 라우트는 무시
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // 파일 확장자가 있는 경우
  ) {
    return NextResponse.next();
  }

  // 이미 locale이 경로에 있는지 확인
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // locale이 없으면 기본 locale로 리다이렉트
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // 정적 파일, API 라우트, _next 제외
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
