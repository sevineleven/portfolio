import Section from '../ui/Section';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';

interface ContactProps {
  locale: Locale;
}

export default function Contact({ locale }: ContactProps) {
  const t = useTranslations(locale);

  // Contact 섹션을 최소화 (이제 Hero와 Footer에 이메일 기능 통합)
  return (
    <Section id="contact" variant="default">
      <div className="text-center py-8">
        <h2 className="mb-2 text-lg md:text-xl font-bold text-gray-900 dark:!text-white">
          {t('contact.title') || 'Contact'}
        </h2>
        <p className="text-xs md:text-sm text-gray-600 dark:!text-gray-400">
          {t('contact.subtitle') || 'Get in touch with me'}
        </p>
      </div>
    </Section>
  );
}
