'use client';

/**
 * 클라이언트 사이드에서 브라우저와 디바이스 정보를 감지하는 유틸리티
 */
export type BrowserType = 'chrome' | 'safari' | 'firefox' | 'edge' | 'other';
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface BrowserInfo {
  browser: BrowserType;
  device: DeviceType;
  isChrome: boolean;
  isSafari: boolean;
  isMobile: boolean;
  isDesktop: boolean;
  isOptimized: boolean; // PC Chrome 또는 Mobile Safari인지
}

/**
 * User-Agent를 분석하여 브라우저 정보를 반환
 */
export function detectBrowser(): BrowserInfo {
  if (typeof window === 'undefined') {
    // SSR 환경에서는 기본값 반환
    return {
      browser: 'other',
      device: 'desktop',
      isChrome: false,
      isSafari: false,
      isMobile: false,
      isDesktop: true,
      isOptimized: false,
    };
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform.toLowerCase();

  // 브라우저 감지
  let browser: BrowserType = 'other';
  if (userAgent.includes('chrome') && !userAgent.includes('edg')) {
    browser = 'chrome';
  } else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
    browser = 'safari';
  } else if (userAgent.includes('firefox')) {
    browser = 'firefox';
  } else if (userAgent.includes('edg')) {
    browser = 'edge';
  }

  // 디바이스 감지
  let device: DeviceType = 'desktop';
  const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isTabletUA = /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
  
  if (isMobileUA && !isTabletUA) {
    device = 'mobile';
  } else if (isTabletUA || (window.innerWidth >= 768 && window.innerWidth < 1024)) {
    device = 'tablet';
  } else {
    device = 'desktop';
  }

  // 추가 체크: 실제 화면 크기로 재확인
  const width = window.innerWidth;
  if (width < 768 && device === 'desktop') {
    device = 'mobile';
  }

  const isChrome = browser === 'chrome';
  const isSafari = browser === 'safari';
  const isMobile = device === 'mobile';
  const isDesktop = device === 'desktop';

  // 최적화 여부: PC Chrome 또는 Mobile Safari
  const isOptimized = (isDesktop && isChrome) || (isMobile && isSafari);

  return {
    browser,
    device,
    isChrome,
    isSafari,
    isMobile,
    isDesktop,
    isOptimized,
  };
}
