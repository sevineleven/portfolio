import Section from '../ui/Section';
import { Locale } from '@/i18n';

interface ContactProps {
  locale: Locale;
}

export default function Contact({ locale }: ContactProps) {
  return (
    <Section id="contact" variant="default">
      <div className="text-center py-12 md:py-16">
        <h2 className="mb-3 text-2xl md:text-3xl font-bold text-gray-900 dark:!text-white">
          {locale === 'ko' ? 'Thank you!' : 'Thank You!'}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:!text-gray-400">
          {locale === 'ko' 
            ? '사용자를 생각하는 개발자 박세빈이었습니다.' 
            : 'This was Park SeVin, a developer who thinks about users.'}
        </p>
      </div>
    </Section>
  );
}
