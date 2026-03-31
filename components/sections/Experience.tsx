import Section from '../ui/Section';
import TimelineItem from '../ui/TimelineItem';
import Card from '../ui/Card';
import { experiences } from '@/data/portfolio';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';

interface ExperienceProps {
  locale: Locale;
}

type LocalizedText = {
  title?: string;
  titleEn?: string;
  titleZh?: string;
  company?: string;
  companyEn?: string;
  companyZh?: string;
  description?: string;
  descriptionEn?: string;
  descriptionZh?: string;
};

type WorkItem = {
  name: string;
  nameEn?: string;
  nameZh?: string;
  description: string;
  descriptionEn?: string;
  descriptionZh?: string;
};

type WorkCategory = {
  title: string;
  titleEn?: string;
  titleZh?: string;
  layout?: 'grid' | 'row';
  items: WorkItem[];
};

type AwardItem = {
  title: string;
  titleEn?: string;
  titleZh?: string;
  organization: string;
  organizationEn?: string;
  organizationZh?: string;
  date: string;
};

type ExperienceItem = LocalizedText & {
  title: string;
  company: string;
  period: string;
  award?: AwardItem | AwardItem[];
  workItems?: WorkCategory[];
};

function pickLocalized(
  locale: Locale,
  value: { ko?: string; en?: string; zh?: string; fallback?: string }
) {
  if (locale === 'ko') return value.ko ?? value.fallback ?? '';
  if (locale === 'zh') return value.zh ?? value.en ?? value.ko ?? value.fallback ?? '';
  return value.en ?? value.ko ?? value.fallback ?? '';
}

export default function Experience({ locale }: ExperienceProps) {
  const t = useTranslations(locale);
  const subtitle = t('experience.subtitle');

  return (
    <Section id="experience" variant="default">
      <div className="mb-12 text-center">
        <h2 className="section-title mb-3 text-xl font-bold md:text-2xl">
          {t('experience.title') || 'Experience'}
        </h2>
        {subtitle ? (
          <p className="section-subtitle text-sm">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="max-w-4xl mx-auto">
        {(experiences as ExperienceItem[]).map((exp, index) => {
          const descriptionText = pickLocalized(locale, {
            ko: exp.description,
            en: exp.descriptionEn,
            zh: exp.descriptionZh,
            fallback: exp.description,
          });
          const hasWorkItems = Array.isArray(exp.workItems) && exp.workItems.length > 0;

          const descriptionContent = hasWorkItems ? (
            <div className="space-y-6 mt-3">
              <p className="experience-description text-sm mb-4 leading-relaxed">{descriptionText}</p>
              {/* 모든 카테고리를 하나의 2열 그리드에 배치. row 카테고리는 col-span-2로 전체 너비 차지 */}
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 md:grid-flow-dense">
                {exp.workItems!.map((category, catIdx) => {
                  const categoryTitle = pickLocalized(locale, {
                    ko: category.title,
                    en: category.titleEn,
                    zh: category.titleZh,
                    fallback: category.title,
                  });
                  const isRow = category.layout === 'row';

                  return (
                    <div
                      key={catIdx}
                      className={`space-y-3 ${isRow ? 'sm:col-span-1 md:col-span-2' : ''}`}
                    >
                      <h4 className="experience-category-title text-xs font-semibold uppercase tracking-wider mb-3">
                        {categoryTitle}
                      </h4>
                      {/* row 카테고리: 아이템을 2열 그리드로 가로 배치 */}
                      <div className={isRow ? 'grid gap-3 sm:grid-cols-1 md:grid-cols-2' : 'space-y-3'}>
                        {category.items.map((item, itemIdx) => {
                          const itemName = pickLocalized(locale, {
                            ko: item.name,
                            en: item.nameEn,
                            zh: item.nameZh,
                            fallback: item.name,
                          });
                          const itemDesc = pickLocalized(locale, {
                            ko: item.description,
                            en: item.descriptionEn,
                            zh: item.descriptionZh,
                            fallback: item.description,
                          });
                          return (
                            <Card key={itemIdx} hover={false} className="experience-item-card p-3">
                              <h5 className="experience-item-title text-xs md:text-sm font-semibold mb-1.5">
                                {itemName}
                              </h5>
                              <p className="experience-item-description text-xs leading-relaxed">
                                {itemDesc}
                              </p>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="experience-description text-sm leading-relaxed">{descriptionText}</p>
          );

          const descriptionWithAward = exp.award ? (
            <div>
              <div className="dark:!text-white">{descriptionContent}</div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                <div className="space-y-2">
                  {(Array.isArray(exp.award) ? exp.award : [exp.award]).map((award, awardIdx) => (
                    <Card key={awardIdx} hover={false} className="experience-award-card p-3">
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
                          <p className="experience-award-title text-xs md:text-sm font-medium">
                            {pickLocalized(locale, {
                              ko: award.title,
                              en: award.titleEn,
                              zh: award.titleZh,
                              fallback: award.title,
                            })}
                          </p>
                          <p className="experience-award-org text-xs mt-1">
                            {pickLocalized(locale, {
                              ko: award.organization,
                              en: award.organizationEn,
                              zh: award.organizationZh,
                              fallback: award.organization,
                            })}{' '}
                            • {award.date}
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

          const titleText = pickLocalized(locale, {
            ko: exp.title,
            en: exp.titleEn,
            zh: exp.titleZh,
            fallback: exp.title,
          });
          const companyText = pickLocalized(locale, {
            ko: exp.company,
            en: exp.companyEn,
            zh: exp.companyZh,
            fallback: exp.company,
          });

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
