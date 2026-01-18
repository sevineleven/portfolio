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
        <h2 className="section-title mb-3 text-3xl font-bold">
          {t('about.title') || 'About'}
        </h2>
        {subtitle ? (
          <p className="section-subtitle">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="about-card-title mb-3 text-xl font-semibold">
            About Me
          </h3>
          <p className="about-card-text leading-relaxed">
            {description}
          </p>
        </Card>

        <Card>
          <h3 className="about-card-title mb-3 text-xl font-semibold">
            Highlights
          </h3>
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="about-highlight-item flex items-start gap-2">
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
