import Button from '../ui/Button';
import Section from '../ui/Section';
import GitHubButton from '../ui/GitHubButton';
import LinkedInButton from '../ui/LinkedInButton';
import { personalInfo } from '@/data/portfolio';
import Image from 'next/image';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const t = useTranslations(locale);
  return (
    <Section id="hero" className="min-h-[85vh] flex items-center" variant="default">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        <div className="flex-1">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:!text-white md:text-4xl [text-shadow:none!important]">
            Hi, I&apos;m <span className="text-gray-700 dark:!text-white [text-shadow:none!important]">{personalInfo.nameEn}</span>
          </h1>
              <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:!text-white md:text-2xl [text-shadow:none!important]">
                {t('hero.role') || 'Backend Developer'}
              </h2>
          <div className="mb-8 text-base text-gray-600 dark:!text-white md:text-lg leading-relaxed whitespace-pre-line space-y-3 [text-shadow:none!important]">
            {locale === 'ko' ? personalInfo.bio : (personalInfo.bioEn || personalInfo.bio)}
          </div>
          <div className="flex flex-wrap gap-4">
            <GitHubButton url={personalInfo.github} username="GitHub" />
            <LinkedInButton url={personalInfo.linkedin} />
            <Button href="#projects" variant="primary">
              {t('hero.viewProjects') || 'View Projects'}
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="aspect-square w-full rounded-lg bg-gray-200 dark:bg-slate-800/50 overflow-hidden relative">
            {personalInfo.profileImage ? (
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.nameEn || personalInfo.name}
                fill
                className="object-cover rounded-lg"
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

