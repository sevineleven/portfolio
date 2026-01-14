import { Locale } from '@/i18n';

type Messages = {
  [key: string]: any;
};

const messages: Record<Locale, Messages> = {
  ko: require('@/messages/ko.json'),
  en: require('@/messages/en.json'),
  zh: require('@/messages/zh.json'),
};

export function getMessages(locale: Locale): Messages {
  return messages[locale] || messages.ko;
}

export function useTranslations(locale: Locale) {
  const msgs = getMessages(locale);
  
  return function t(key: string): string | null {
    const keys = key.split('.');
    let value: any = msgs;
    
    for (const k of keys) {
      if (value == null || typeof value !== 'object') {
        return null;
      }
      value = value[k];
    }
    
    // 값이 없거나 빈 문자열이면 null 반환
    if (value == null || value === '') {
      return null;
    }
    
    return typeof value === 'string' ? value : null;
  };
}
