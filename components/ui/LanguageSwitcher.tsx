'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Locale, locales } from '@/i18n';

const flagEmojis: Record<Locale, string> = {
  ko: '🇰🇷',
  en: '🇺🇸',
};

const languageLabels: Record<Locale, string> = {
  ko: 'KO',
  en: 'EN',
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // 현재 locale 추출
  const currentLocale = (pathname.split('/')[1] || 'ko') as Locale;

  const switchLanguage = (locale: Locale) => {
    // 현재 경로에서 locale 부분만 변경
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/');
    
    router.push(newPath);
    setIsOpen(false);
  };

  const copyUrl = async () => {
    try {
      // 현재 전체 URL 가져오기 (해시 포함)
      const fullUrl = window.location.href;
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setShareMenuOpen(false);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
      // Fallback: 구형 브라우저 지원
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setShareMenuOpen(false);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Fallback copy failed:', err);
      }
      document.body.removeChild(textArea);
    }
  };

  const shareToKakao = () => {
    const fullUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Portfolio - Sevin Park');
    const description = encodeURIComponent('Backend Developer Portfolio');
    
    // 카카오톡 공유하기 링크 (모바일에서 카카오톡 앱 열림)
    const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?url=${fullUrl}&text=${title}%20-%20${description}`;
    
    // 새 창에서 열기 (팝업 차단 가능성 있음)
    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    window.open(
      kakaoUrl,
      'kakao-share',
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
    );
    
    setShareMenuOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 items-end">
      {/* 메인 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/95 dark:bg-slate-800/95 border-2 border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-400 transition-all duration-200 hover:opacity-90"
        aria-label="Switch language"
      >
        {isOpen ? (
          <span className="text-2xl">🌐</span>
        ) : (
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-xl leading-none">{flagEmojis[currentLocale]}</span>
            <span className="text-[9px] font-bold text-gray-700 dark:text-gray-200 leading-none">
              {languageLabels[currentLocale]}
            </span>
          </div>
        )}
      </button>

      {/* 공유 버튼 */}
      <div className="relative">
        <button
          onClick={() => setShareMenuOpen(!shareMenuOpen)}
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/95 dark:bg-slate-800/95 border-2 border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-400 transition-all duration-200 hover:opacity-90 relative"
          aria-label="Share"
          title="Share"
        >
          {copied ? (
            <span className="text-2xl">✓</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-700 dark:text-gray-200"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          )}
          {copied && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-md whitespace-nowrap">
              Copied!
            </div>
          )}
        </button>

        {/* 공유 메뉴 */}
        {shareMenuOpen && (
          <>
            <div className="absolute bottom-full right-0 mb-3 flex flex-col gap-2 bg-white/95 dark:bg-slate-800/95 rounded-lg border-2 border-gray-200 dark:border-slate-600 p-2 shadow-lg min-w-[140px]">
              <button
                onClick={copyUrl}
                className="flex items-center gap-3 px-4 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-gray-700 dark:text-gray-200"
                aria-label="Copy URL"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                <span>URL 복사</span>
              </button>
              <button
                onClick={shareToKakao}
                className="flex items-center gap-3 px-4 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-gray-700 dark:text-gray-200"
                aria-label="Share to KakaoTalk"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3C7.03 3 3 6.16 3 10.17c0 2.28 1.51 4.3 3.78 5.53L6 21l5.71-3.78c.42.04.85.07 1.29.07 4.97 0 9-3.16 9-7.17C22 6.16 17.97 3 12 3z"
                    fill="#3C1E1E"
                  />
                </svg>
                <span>카카오톡</span>
              </button>
            </div>
            {/* 오버레이 (클릭 시 닫기) */}
            <div
              className="fixed inset-0 -z-10"
              onClick={() => setShareMenuOpen(false)}
            />
          </>
        )}
      </div>

      {/* 언어 선택 옵션 */}
      {isOpen && (
        <>
          <div className="absolute bottom-full right-0 mb-3 flex flex-col gap-2">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                className={`flex flex-col items-center justify-center w-14 h-14 rounded-full bg-white/95 dark:bg-slate-800/95 border-2 transition-all duration-200 hover:opacity-90 ${
                  locale === currentLocale
                    ? 'border-slate-400 dark:border-slate-500'
                    : 'border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                }`}
                aria-label={`Switch to ${locale}`}
              >
                <span className="text-xl leading-none">{flagEmojis[locale]}</span>
                <span className="text-[9px] font-bold text-gray-700 dark:text-gray-200 leading-none mt-0.5">
                  {languageLabels[locale]}
                </span>
              </button>
            ))}
          </div>
          
          {/* 오버레이 (클릭 시 닫기) */}
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
}
