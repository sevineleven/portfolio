import Section from "../ui/Section";
import Chip from "../ui/Chip";
import { skills } from "@/data/portfolio";
import { Locale } from "@/i18n";
import { useTranslations } from "@/lib/i18n";

interface SkillsProps {
  locale: Locale;
}

export default function Skills({ locale }: SkillsProps) {
  const t = useTranslations(locale);
  const subtitle = t("skills.subtitle");

  return (
    <Section id="skills" variant="default">
      <div className="mb-12 text-center">
        <h2 className="section-title mb-3 text-xl font-bold md:text-2xl">
          {t("skills.title") || "Skills"}
        </h2>
        {subtitle ? (
          <p className="section-subtitle text-sm">{subtitle}</p>
        ) : null}
      </div>

      <div className="space-y-8">
        {skills.map((category, index) => (
          <div key={index}>
            <h3 className="skills-category-title mb-4 text-base md:text-lg font-semibold">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
