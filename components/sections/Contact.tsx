import Section from '../ui/Section';
import Button from '../ui/Button';
import { personalInfo } from '@/data/portfolio';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';

interface ContactProps {
  locale: Locale;
}

export default function Contact({ locale }: ContactProps) {
  const t = useTranslations(locale);
  const subtitle = t('contact.subtitle');

  return (
    <Section id="contact" variant="default">
      <div className="text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:!text-white md:text-3xl">
          {t('contact.title') || 'Contact'}
        </h2>
        {subtitle ? (
          <p className="mb-8 text-gray-600 dark:!text-white">
            {subtitle}
          </p>
        ) : (
          <div className="mb-8" />
        )}
        <Button href={`mailto:${personalInfo.email}`} variant="primary">
          {t('contact.cta') || 'Send Email'}
        </Button>
      </div>
    </Section>
  );
}
