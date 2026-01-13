import Section from '../ui/Section';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';

interface ContactProps {
  locale: Locale;
}

export default function Contact({ locale }: ContactProps) {
  const t = useTranslations(locale);

  return (
    <Section id="contact" variant="default">
      <div className="text-center py-12 md:py-16">
        <h2 className="mb-3 text-2xl md:text-3xl font-bold text-gray-900 dark:!text-white">
          {locale === 'ko' ? 'Thank you!' : 'Thank You!'}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:!text-gray-400">
          {locale === 'ko' 
            ? '포트폴리오를 확인해 주셔서 감사합니다.' 
            : 'Thank you for taking the time to view my portfolio.'}
        </p>
      </div>
    </Section>
  );
}
