import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Card from "@/components/ui/Card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";
import MarkdownContent from "@/components/ui/MarkdownContent";
import { Locale } from "@/i18n";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
    locale: Locale;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id, locale } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  // 다국어 메시지
  const messages = {
    ko: {
      backToProjects: "프로젝트 목록으로 돌아가기",
      overview: "프로젝트 개요",
      techStack: "기술 스택",
      projectInfo: "프로젝트 정보",
      projectOrigin: "프로젝트 출처",
      period: "기간",
      teamSize: "팀 규모",
      myRole: "담당 역할",
      people: "명",
      keyContributions: "나의 역할",
      challenges: "기술적 도전과제",
      results: "프로젝트 성과",
      screenshots: "스크린샷",
      viewGithub: "GitHub에서 보기",
      viewLive: "라이브 보기",
      technologyReasons: "기술 선택 이유",
      architecture: "시스템 아키텍처",
      retrospection: "프로젝트 회고",
      whatWorkedWell: "잘한 점",
      areasForImprovement: "아쉬웠던 점",
      lessonsLearned: "배운 점",
    },
    en: {
      backToProjects: "Back to Projects",
      overview: "Overview",
      techStack: "Tech Stack",
      projectInfo: "Project Info",
      projectOrigin: "Project Origin",
      period: "Period",
      teamSize: "Team Size",
      myRole: "My Role",
      people: "people",
      keyContributions: "Key Contributions",
      challenges: "Technical Challenges",
      results: "Results",
      screenshots: "Screenshots",
      viewGithub: "View on GitHub",
      viewLive: "View Live",
      technologyReasons: "Technology Selection Reasons",
      architecture: "System Architecture",
      retrospection: "Project Retrospection",
      whatWorkedWell: "What Worked Well",
      areasForImprovement: "Areas for Improvement",
      lessonsLearned: "Lessons Learned",
    },
  };

  const t = messages[locale];
  const projectData = project as any;
  const title = locale === "ko" ? project.title : (project.titleEn || project.title);
  const description =
    locale === "ko" ? project.description : (project.descriptionEn || project.description);

  return (
    <>
      <Navbar locale={locale} />
      <main className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16">
        <Container>
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href={`/${locale}#projects`}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:!text-white dark:hover:text-white transition-colors duration-200"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {t.backToProjects}
            </Link>
          </div>

          <div className="max-w-4xl mx-auto px-4 md:px-0">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:!text-white mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:!text-white leading-relaxed max-w-3xl">
                {description}
              </p>
            </div>

            {/* Main Image */}
            {project.image && (
              <div className="mb-12 aspect-video w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-slate-800/50">
                <Image
                  src={project.image}
                  alt={title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8 md:space-y-12">
                {/* Overview Section */}
                {projectData.overview && (
                  <section>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:!text-white mb-4 md:mb-6">
                      {t.overview}
                    </h2>
                    <div className="text-base md:text-lg text-gray-700 dark:!text-white leading-relaxed">
                      <MarkdownContent
                        content={
                          locale === "ko"
                            ? projectData.overview
                            : projectData.overviewEn || projectData.overview
                        }
                      />
                    </div>
                  </section>
                )}

                {/* Key Contributions */}
                {projectData.roleDetails &&
                  projectData.roleDetails.length > 0 && (
                    <section>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:!text-white mb-4 md:mb-6">
                        {t.keyContributions}
                      </h2>
                      <ul className="space-y-3 md:space-y-4">
                        {projectData.roleDetails.map(
                          (detail: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-base md:text-lg text-gray-700 dark:!text-white"
                            >
                              <span className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-slate-400" />
                              <div className="leading-relaxed flex-1">
                                <MarkdownContent content={detail} />
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </section>
                  )}

                {/* Technical Challenges */}
                {projectData.challenges &&
                  projectData.challenges.length > 0 && (
                    <section>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:!text-white mb-4 md:mb-6">
                        {t.challenges}
                      </h2>
                      <div className="space-y-4 md:space-y-6">
                        {projectData.challenges.map(
                          (challenge: any, idx: number) => (
                            <Card key={idx} hover={false} className="p-4 md:p-6">
                              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                                {locale === "ko"
                                  ? challenge.problem
                                  : challenge.problemEn || challenge.problem}
                              </h3>
                              <div className="text-base md:text-lg text-gray-600 dark:!text-white leading-relaxed">
                                <MarkdownContent
                                  content={
                                    locale === "ko"
                                      ? challenge.solution
                                      : challenge.solutionEn || challenge.solution
                                  }
                                />
                              </div>
                            </Card>
                          )
                        )}
                      </div>
                    </section>
                  )}

                {/* Results */}
                {projectData.results && projectData.results.length > 0 && (
                    <section>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:!text-white mb-4 md:mb-6">
                        {t.results}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {projectData.results.map((result: any, idx: number) => (
                          <Card key={idx} hover={false} className="p-5 md:p-6 flex flex-col">
                            <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                              {result.metric}
                            </div>
                            <div className="text-sm md:text-base text-gray-600 dark:!text-gray-300 leading-relaxed flex-1">
                              <MarkdownContent
                                content={
                                  locale === "ko"
                                    ? result.description
                                    : result.descriptionEn || result.description
                                }
                              />
                            </div>
                          </Card>
                        ))}
                      </div>
                    </section>
                )}

                {/* Technology Selection Reasons */}
                {projectData.technologyReasons &&
                  projectData.technologyReasons.length > 0 && (
                    <section>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:!text-white mb-4 md:mb-6">
                        {t.technologyReasons}
                      </h2>
                      <div className="space-y-4 md:space-y-6">
                        {projectData.technologyReasons.map(
                          (tech: any, idx: number) => (
                            <Card key={idx} hover={false} className="p-4 md:p-6">
                              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                                {tech.technology}
                              </h3>
                              <div className="text-base md:text-lg text-gray-700 dark:!text-white leading-relaxed">
                                <MarkdownContent
                                  content={
                                    locale === "ko"
                                      ? tech.reason
                                      : tech.reasonEn || tech.reason
                                  }
                                />
                              </div>
                            </Card>
                          )
                        )}
                      </div>
                    </section>
                  )}

                {/* System Architecture */}
                {projectData.architectureImages &&
                  projectData.architectureImages.length > 0 && (
                    <section>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:!text-white mb-4 md:mb-6">
                        {t.architecture}
                      </h2>
                      <div className="space-y-6 md:space-y-8">
                        {projectData.architectureImages.map(
                          (arch: any, idx: number) => (
                            <Card key={idx} hover={false} className="p-4 md:p-6">
                              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                                {locale === "ko"
                                  ? arch.title
                                  : arch.titleEn || arch.title}
                              </h3>
                              <div className="mb-3 md:mb-4 aspect-video w-full rounded-lg overflow-hidden bg-gray-200 dark:bg-slate-800/50 relative">
                                <Image
                                  src={arch.url}
                                  alt={
                                    locale === "ko"
                                      ? arch.title
                                      : arch.titleEn || arch.title
                                  }
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <p className="text-base md:text-lg text-gray-600 dark:!text-white mt-3 md:mt-4">
                                {locale === "ko"
                                  ? arch.description
                                  : arch.descriptionEn || arch.description}
                              </p>
                            </Card>
                          )
                        )}
                      </div>
                    </section>
                  )}

                {/* Project Retrospection */}
                {projectData.retrospection && (
                  <section>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:!text-white mb-4 md:mb-6">
                      {t.retrospection}
                    </h2>
                    <div className="space-y-4 md:space-y-6">
                      {projectData.retrospection.whatWorkedWell && (
                        <Card hover={false} className="p-4 md:p-6">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                            {t.whatWorkedWell}
                          </h3>
                          <div className="text-base md:text-lg text-gray-700 dark:!text-white leading-relaxed">
                            <MarkdownContent
                              content={
                                locale === "ko"
                                  ? projectData.retrospection.whatWorkedWell
                                  : projectData.retrospection.whatWorkedWellEn ||
                                    projectData.retrospection.whatWorkedWell
                              }
                            />
                          </div>
                        </Card>
                      )}
                      {projectData.retrospection.areasForImprovement && (
                        <Card hover={false} className="p-4 md:p-6">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                            {t.areasForImprovement}
                          </h3>
                          <div className="text-base md:text-lg text-gray-700 dark:!text-white leading-relaxed">
                            <MarkdownContent
                              content={
                                locale === "ko"
                                  ? projectData.retrospection.areasForImprovement
                                  : projectData.retrospection
                                      .areasForImprovementEn ||
                                    projectData.retrospection.areasForImprovement
                              }
                            />
                          </div>
                        </Card>
                      )}
                      {projectData.retrospection.lessonsLearned && (
                        <Card hover={false} className="p-4 md:p-6">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                            {t.lessonsLearned}
                          </h3>
                          <div className="text-base md:text-lg text-gray-700 dark:!text-white leading-relaxed">
                            <MarkdownContent
                              content={
                                locale === "ko"
                                  ? projectData.retrospection.lessonsLearned
                                  : projectData.retrospection.lessonsLearnedEn ||
                                    projectData.retrospection.lessonsLearned
                              }
                            />
                          </div>
                        </Card>
                      )}
                    </div>
                  </section>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24 space-y-4 md:space-y-6">
                  {/* Project Info Card */}
                  <Card hover={false} className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:!text-white mb-4 md:mb-6">
                      {t.projectInfo}
                    </h3>
                    <div className="space-y-4 md:space-y-5">
                      {projectData.projectOrigin && (
                        <div>
                          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:!text-white mb-1.5 md:mb-2">
                            {t.projectOrigin}
                          </div>
                          <div className="text-sm md:text-base font-medium text-gray-900 dark:!text-white">
                            {locale === "ko"
                              ? projectData.projectOrigin
                              : projectData.projectOriginEn ||
                                projectData.projectOrigin}
                          </div>
                        </div>
                      )}
                      {projectData.period && (
                        <div>
                          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:!text-white mb-1.5 md:mb-2">
                            {t.period}
                          </div>
                          <div className="text-sm md:text-base font-medium text-gray-900 dark:!text-white">
                            {projectData.period}
                          </div>
                        </div>
                      )}
                      {projectData.teamSize && (
                        <div>
                          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:!text-white mb-1.5 md:mb-2">
                            {t.teamSize}
                          </div>
                          <div className="text-sm md:text-base font-medium text-gray-900 dark:!text-white">
                            {projectData.teamSize} {t.people}
                          </div>
                        </div>
                      )}
                      {projectData.myRole && (
                        <div>
                          <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:!text-white mb-1.5 md:mb-2">
                            {t.myRole}
                          </div>
                          <div className="text-sm md:text-base font-medium text-gray-900 dark:!text-white">
                            {locale === "ko"
                              ? projectData.myRole
                              : "Backend Developer"}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>

                  {/* Tech Stack Card */}
                  <Card hover={false} className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                      {t.techStack}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                      ))}
                    </div>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 md:gap-4">
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        external
                        variant="outline"
                        className="w-full"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {t.viewGithub}
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        external
                        variant="primary"
                        className="w-full"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        {t.viewLive}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshots - Full Width */}
            {project.images && project.images.length > 0 && (
              <section className="mt-8 md:mt-12 -mx-4 md:-mx-6 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-20">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:!text-white mb-4 md:mb-6">
                  {t.screenshots}
                </h2>
                <ProjectScreenshots
                  images={project.images}
                  title={title}
                  locale={locale}
                />
              </section>
            )}
          </div>
        </Container>
      </main>
      <Footer locale={locale} />
    </>
  );
}
