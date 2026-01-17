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
        <h2 className="mb-3 text-xl font-bold text-gray-900 dark:!text-white md:text-2xl">
          {t('experience.title') || 'Experience'}
        </h2>
        {subtitle ? (
          <p className="text-sm text-gray-600 dark:!text-white">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => {
          const descriptionText = 
            locale === 'ko' ? exp.description 
            : locale === 'zh' ? ((exp as any).descriptionZh || exp.descriptionEn || exp.description)
            : (exp.descriptionEn || exp.description);
          const hasWorkItems = 'workItems' in exp && exp.workItems && exp.workItems.length > 0;

          const descriptionContent = hasWorkItems ? (
            <div className="space-y-6 mt-3">
              <p className="text-sm text-gray-700 dark:!text-white mb-4 leading-relaxed">{descriptionText}</p>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                {exp.workItems.map((category: any, catIdx: number) => (
                  <div key={catIdx} className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-700 dark:!text-gray-300 uppercase tracking-wider mb-3">
                      {locale === 'ko' ? category.title 
                       : locale === 'zh' ? (category.titleZh || category.titleEn || category.title)
                       : (category.titleEn || category.title)}
                    </h4>
                    <div className="space-y-3">
                      {category.items.map((item: any, itemIdx: number) => (
                        <Card key={itemIdx} hover={false} className="p-3 bg-gray-50/50 dark:bg-slate-800/30 border-gray-200 dark:border-slate-700">
                          <h5 className="text-xs md:text-sm font-semibold text-gray-900 dark:!text-white mb-1.5">
                            {locale === 'ko' ? item.name 
                             : locale === 'zh' ? (item.nameZh || item.nameEn || item.name)
                             : (item.nameEn || item.name)}
                          </h5>
                          <p className="text-xs text-gray-600 dark:!text-gray-400 leading-relaxed">
                            {locale === 'ko' ? item.description 
                             : locale === 'zh' ? (item.descriptionZh || item.descriptionEn || item.description)
                             : (item.descriptionEn || item.description)}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-700 dark:!text-white leading-relaxed">{descriptionText}</p>
          );

          const descriptionWithAward = exp.award ? (
            <div>
              <div className="dark:!text-white">{descriptionContent}</div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                <div className="space-y-2">
                  {(Array.isArray(exp.award) ? exp.award : [exp.award]).map((award: any, awardIdx: number) => (
                    <Card key={awardIdx} hover={false} className="p-3 bg-gray-50/50 dark:bg-slate-800/30 border-gray-200 dark:border-slate-700">
                      <div className="flex items-start gap-2">
                        {/* 트로피 아이콘 */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4 mt-0.5 text-yellow-500 dark:text-yellow-400 flex-shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.166 5.144A19.721 19.721 0 0112 4.5c4.85 0 9.18.842 11.834 2.644a3.5 3.5 0 011.483 2.656c0 2.044-1.244 3.937-3.25 4.837a15.324 15.324 0 01-3.48 1.017c-1.222.147-2.39.063-3.447-.008a47.413 47.413 0 01-4.28-.001 15.322 15.322 0 01-3.48-1.017c-2.006-.9-3.25-2.793-3.25-4.837a3.5 3.5 0 011.483-2.656zm8.212 6.453a12.76 12.76 0 01-2.756.116 12.762 12.762 0 01-2.756-.116c-1.54-.185-2.923-.505-4.002-1.007a1.5 1.5 0 01-.635-1.423c.013-.704.241-1.362.586-1.925.345-.563.8-1.034 1.343-1.386A18.136 18.136 0 0112 6c3.687 0 6.977.763 9.446 2.038.544.352.998.823 1.343 1.386.345.563.573 1.22.586 1.925a1.5 1.5 0 01-.635 1.423c-1.079.502-2.462.822-4.002 1.007z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex-1">
                          <p className="text-xs md:text-sm font-medium text-gray-900 dark:!text-white">
                            {locale === 'ko' ? award.title 
                             : locale === 'zh' ? (award.titleZh || award.titleEn || award.title)
                             : (award.titleEn || award.title)}
                          </p>
                          <p className="text-xs text-gray-600 dark:!text-white mt-1">
                            {locale === 'ko' ? award.organization 
                             : locale === 'zh' ? (award.organizationZh || award.organizationEn || award.organization)
                             : (award.organizationEn || award.organization)} • {award.date}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            descriptionContent
          );

          const titleText = 
            locale === 'ko' ? exp.title 
            : locale === 'zh' ? ((exp as any).titleZh || (exp as any).titleEn || exp.title)
            : ((exp as any).titleEn || exp.title);
          const companyText = 
            locale === 'ko' ? exp.company 
            : locale === 'zh' ? (exp.companyZh || exp.companyEn || exp.company)
            : (exp.companyEn || exp.company);

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
