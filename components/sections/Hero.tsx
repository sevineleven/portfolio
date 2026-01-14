import Section from "../ui/Section";
import GitHubButton from "../ui/GitHubButton";
import LinkedInButton from "../ui/LinkedInButton";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import { Locale } from "@/i18n";
import { useTranslations } from "@/lib/i18n";

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const t = useTranslations(locale);
  return (
    <Section
      id="hero"
      className="min-h-[85vh] flex items-center"
      variant="default"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
        <div className="flex-1">
          <div className="mb-8 flex flex-col md:flex-row md:items-start md:gap-6">
            <div className="flex-1">
              <h1 className="mb-2 text-3xl md:text-4xl font-bold leading-tight text-gray-900 dark:!text-white [text-shadow:none!important]">
                {locale === "ko" ? personalInfo.name : personalInfo.nameEn}
              </h1>
              <h2 className="mb-4 text-lg md:text-xl font-medium text-gray-700 dark:!text-gray-300 [text-shadow:none!important]">
                {t("hero.role") || personalInfo.role}
              </h2>
              <p className="text-sm text-gray-600 dark:!text-gray-400 [text-shadow:none!important]">
                {personalInfo.email}
              </p>
            </div>
            {/* 모바일에서 사진을 이름 옆에 배치 */}
            <div className="md:hidden flex-shrink-0">
              <div className="aspect-square w-24 h-24 rounded-lg bg-gray-200 dark:bg-slate-800/50 overflow-hidden relative">
                {personalInfo.profileImage ? (
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.nameEn || personalInfo.name}
                    fill
                    className="object-cover object-top rounded-lg"
                    style={{ objectPosition: 'center top' }}
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-400 text-xs">
                    Profile
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Philosophy Sections */}
          {personalInfo.philosophy && personalInfo.philosophy.length > 0 && (
            <div className="space-y-6 mb-8">
              {personalInfo.philosophy.map((item: { title: string; titleEn?: string; titleZh?: string; description: string; descriptionEn?: string; descriptionZh?: string }, index: number) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-gray-900 dark:!text-white [text-shadow:none!important]">
                    {locale === "ko" ? item.title : locale === "zh" ? item.titleZh || item.titleEn || item.title : item.titleEn || item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 dark:!text-gray-300 leading-relaxed [text-shadow:none!important]">
                    {locale === "ko"
                      ? item.description
                      : locale === "zh"
                      ? item.descriptionZh || item.descriptionEn || item.description
                      : item.descriptionEn || item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            <GitHubButton url={personalInfo.github} username="GitHub" />
            <LinkedInButton url={personalInfo.linkedin} />
          </div>
        </div>
        {/* 데스크톱에서만 사진을 오른쪽에 배치 - 오른쪽 열의 세로 중앙 정렬 */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="aspect-square w-full max-w-xs rounded-lg bg-gray-200 dark:bg-slate-800/50 overflow-hidden relative">
            {personalInfo.profileImage ? (
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.nameEn || personalInfo.name}
                fill
                className="object-cover object-top rounded-lg"
                style={{ objectPosition: 'center top' }}
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400">
                Profile Image
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
