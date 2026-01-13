import Section from '../ui/Section';
import Card from '../ui/Card';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';
import { about } from '@/data/portfolio';

interface AboutProps {
  locale: Locale;
}

export default function About({ locale }: AboutProps) {
  const t = useTranslations(locale);

  const subtitle = t('about.subtitle');
  const description = locale === 'ko' ? about.description : about.descriptionEn;
  const highlights = locale === 'ko' ? about.highlights : about.highlightsEn;

  return (
    <Section id="about" variant="default">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:!text-white">
          {t('about.title') || 'About'}
        </h2>
        {subtitle ? (
          <p className="text-gray-600 dark:!text-white">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:!text-white">
            About Me
          </h3>
          <p className="text-gray-600 dark:!text-white leading-relaxed">
            {description}
          </p>
        </Card>

        <Card>
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:!text-white">
            Highlights
          </h3>
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600 dark:!text-white">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
