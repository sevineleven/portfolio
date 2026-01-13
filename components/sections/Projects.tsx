'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Chip from '../ui/Chip';
import { projects } from '@/data/portfolio';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';

interface ProjectsProps {
  locale: Locale;
}

export default function Projects({ locale }: ProjectsProps) {
  const t = useTranslations(locale);
  const allLabel = t('projects.all') || 'All';
  const [selectedTag, setSelectedTag] = useState(allLabel);
  const subtitle = t('projects.subtitle');

  // 모든 태그 수집
  const allTags = [allLabel, ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects =
    selectedTag === allLabel
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <Section id="projects" variant="default">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:!text-white md:text-3xl">
          {t('projects.title') || 'Projects'}
        </h2>
        {subtitle ? (
          <p className="text-gray-600 dark:!text-white">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {allTags.map((tag) => (
          <Chip
            key={tag}
            active={selectedTag === tag}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </Chip>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/${locale}/projects/${project.id}`}
            className="block group"
          >
            <Card className="h-full cursor-pointer group-hover:border-gray-300 dark:group-hover:border-slate-400">
              <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-slate-800/50 relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-opacity duration-150 group-hover:opacity-90"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-400 dark:!text-white">
                    {project.title}
                  </div>
                )}
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:!text-white transition-colors duration-150 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                {locale === 'ko' ? project.title : project.titleEn}
              </h3>
              <p className="text-gray-600 dark:!text-white">
                {locale === 'ko' ? project.description : project.descriptionEn}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
