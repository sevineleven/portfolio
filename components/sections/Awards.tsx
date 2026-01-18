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
        <h2 className="section-title mb-3 text-3xl font-bold">
          Awards
        </h2>
        <p className="section-subtitle">
          Recognitions and achievements.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {awards.map((award, index) => (
          <Card key={index} hover={false}>
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="awards-item-title text-lg font-semibold">
                    {award.titleEn || award.title}
                  </h3>
                  <p className="awards-item-org text-sm">
                    {award.organizationEn || award.organization}
                  </p>
                </div>
                <span className="awards-item-period text-sm whitespace-nowrap">
                  {award.period}
                </span>
              </div>
              {award.description && (
                <p className="awards-item-description text-sm">
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

