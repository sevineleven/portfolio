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

  return (
    <div className="fixed bottom-8 right-8 z-50">
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
