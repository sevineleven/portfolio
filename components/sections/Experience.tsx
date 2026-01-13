import Section from '../ui/Section';
import TimelineItem from '../ui/TimelineItem';
import Card from '../ui/Card';
import { experiences } from '@/data/portfolio';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';

interface ExperienceProps {
  locale: Locale;
}

export default function Experience({ locale }: ExperienceProps) {
  const t = useTranslations(locale);
  const subtitle = t('experience.subtitle');

  return (
    <Section id="experience" variant="default">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:!text-white md:text-3xl">
          {t('experience.title') || 'Experience'}
        </h2>
        {subtitle ? (
          <p className="text-gray-600 dark:!text-white">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => {
          const descriptionText = locale === 'ko' ? exp.description : (exp.descriptionEn || exp.description);
          const hasWorkItems = 'workItems' in exp && exp.workItems && exp.workItems.length > 0;

          const descriptionContent = hasWorkItems ? (
            <div className="space-y-6 mt-3">
              <p className="text-base text-gray-700 dark:!text-white mb-4">{descriptionText}</p>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                {exp.workItems.map((category: any, catIdx: number) => (
                  <div key={catIdx} className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-700 dark:!text-gray-300 uppercase tracking-wider mb-4">
                      {locale === 'ko' ? category.title : (category.titleEn || category.title)}
                    </h4>
                    <div className="space-y-3">
                      {category.items.map((item: any, itemIdx: number) => (
                        <Card key={itemIdx} hover={false} className="p-4 bg-gray-50/50 dark:bg-slate-800/30 border-gray-200 dark:border-slate-700">
                          <h5 className="text-sm font-semibold text-gray-900 dark:!text-white mb-2">
                            {locale === 'ko' ? item.name : (item.nameEn || item.name)}
                          </h5>
                          <p className="text-xs text-gray-600 dark:!text-gray-400 leading-relaxed">
                            {locale === 'ko' ? item.description : (item.descriptionEn || item.description)}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-700 dark:!text-white">{descriptionText}</p>
          );

          const descriptionWithAward = exp.award ? (
            <div>
              <div className="dark:!text-white">{descriptionContent}</div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                <p className="text-sm font-medium text-gray-900 dark:!text-white">
                  {locale === 'ko' ? exp.award.title : (exp.award.titleEn || exp.award.title)}
                </p>
                <p className="text-xs text-gray-600 dark:!text-white mt-1">
                  {locale === 'ko' ? exp.award.organization : (exp.award.organizationEn || exp.award.organization)} • {exp.award.date}
                </p>
              </div>
            </div>
          ) : (
            descriptionContent
          );

          const titleText = locale === 'ko' ? exp.title : ((exp as any).titleEn || exp.title);
          const companyText = locale === 'ko' ? exp.company : (exp.companyEn || exp.company);

          return (
            <TimelineItem
              key={index}
              title={titleText}
              subtitle={companyText}
              period={exp.period}
              description={descriptionWithAward}
              isLast={index === experiences.length - 1}
            />
          );
        })}
      </div>
    </Section>
  );
}
