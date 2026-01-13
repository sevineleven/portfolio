import Section from '../ui/Section';
import Card from '../ui/Card';
import { awards } from '@/data/portfolio';

export default function Awards() {
  if (!awards || awards.length === 0) {
    return null;
  }

  return (
    <Section id="awards" variant="default">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:!text-white">
          Awards
        </h2>
        <p className="text-gray-600 dark:!text-white">
          Recognitions and achievements.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {awards.map((award, index) => (
          <Card key={index} hover={false}>
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:!text-white">
                    {award.titleEn || award.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:!text-white">
                    {award.organizationEn || award.organization}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:!text-white whitespace-nowrap">
                  {award.period}
                </span>
              </div>
              {award.description && (
                <p className="text-gray-600 dark:!text-white text-sm">
                  {award.description}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

