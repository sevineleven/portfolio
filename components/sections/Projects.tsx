"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Chip from "../ui/Chip";
import { projects } from "@/data/portfolio";
import { Locale } from "@/i18n";
import { useTranslations } from "@/lib/i18n";

interface ProjectsProps {
  locale: Locale;
}

export default function Projects({ locale }: ProjectsProps) {
  const t = useTranslations(locale);
  const subtitle = t("projects.subtitle");

  return (
    <Section id="projects" variant="default">
      <div className="mb-12 text-center">
        <h2 className="section-title mb-3 text-xl font-bold md:text-2xl">
          {t("projects.title") || "Projects"}
        </h2>
        {subtitle ? (
          <p className="section-subtitle text-sm mb-2">{subtitle}</p>
        ) : null}
        <p className="projects-hint text-xs italic">
          {t("projects.clickToView")}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/${locale}/projects/${project.id}`}
            className="block group"
          >
            <Card className="project-card h-full cursor-pointer">
              <div className="image-placeholder mb-4 aspect-video w-full overflow-hidden rounded-lg relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-opacity duration-150 group-hover:opacity-90"
                  />
                ) : (
                  <div className="image-placeholder-text flex h-full items-center justify-center">
                    {project.title}
                  </div>
                )}
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
              <h3 className="projects-item-title mb-2 text-base md:text-lg font-semibold transition-colors duration-150">
                {locale === "ko" ? project.title 
                  : locale === "zh" ? ((project as any).titleZh || project.titleEn || project.title)
                  : (project.titleEn || project.title)}
              </h3>
              <p className="projects-item-description text-sm">
                {locale === "ko" ? project.description 
                  : locale === "zh" ? ((project as any).descriptionZh || project.descriptionEn || project.description)
                  : (project.descriptionEn || project.description)}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
