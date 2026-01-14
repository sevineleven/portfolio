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

  const sharePage = async () => {
    const fullUrl = window.location.href;
    const title = 'Portfolio - Sevin Park';
    const description = 'Backend Developer Portfolio';
    
    // Web Share API 사용 (모바일에서 네이티브 공유 메뉴 열림)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: fullUrl,
        });
        setShareMenuOpen(false);
        return;
      } catch (err) {
        // 사용자가 공유를 취소한 경우
        if ((err as Error).name !== 'AbortError') {
          console.error('Share failed:', err);
        }
        return;
      }
    }
    
    // Web Share API를 지원하지 않는 경우 URL 복사
    await copyUrl();
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col gap-2 md:gap-3 items-end">
      {/* 메인 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/95 dark:bg-slate-800/95 border-2 border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-400 transition-all duration-200 hover:opacity-90"
        aria-label="Switch language"
      >
        {isOpen ? (
          <span className="text-xl md:text-2xl">🌐</span>
        ) : (
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-base md:text-xl leading-none">{flagEmojis[currentLocale]}</span>
            <span className="text-[8px] md:text-[9px] font-bold text-gray-700 dark:text-gray-200 leading-none">
              {languageLabels[currentLocale]}
            </span>
          </div>
        )}
      </button>

      {/* 공유 버튼 */}
      <div className="relative">
        <button
          onClick={() => setShareMenuOpen(!shareMenuOpen)}
          className="group flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/95 dark:bg-slate-800/95 border-2 border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-400 transition-all duration-200 hover:opacity-90 relative"
          aria-label="Share"
          title="Share"
        >
          {copied ? (
            <span className="text-xl md:text-2xl">✓</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-200"
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
                onClick={sharePage}
                className="flex items-center gap-3 px-4 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-gray-700 dark:text-gray-200"
                aria-label="Share page"
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
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <span>공유하기</span>
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
                className={`flex flex-col items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/95 dark:bg-slate-800/95 border-2 transition-all duration-200 hover:opacity-90 ${
                  locale === currentLocale
                    ? 'border-slate-400 dark:border-slate-500'
                    : 'border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                }`}
                aria-label={`Switch to ${locale}`}
              >
                <span className="text-base md:text-xl leading-none">{flagEmojis[locale]}</span>
                <span className="text-[8px] md:text-[9px] font-bold text-gray-700 dark:text-gray-200 leading-none mt-0.5">
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
