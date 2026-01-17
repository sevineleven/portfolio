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
import ArchitectureImages from "@/components/projects/ArchitectureImages";
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
      performanceOptimization: "성능 최적화",
      databaseOptimization: "데이터베이스 최적화",
      apiDesign: "API 설계",
      securityImplementation: "보안 구현",
      testingStrategy: "테스트 전략",
      retrospection: "KPT 회고",
      whatWorkedWell: "Keep",
      areasForImprovement: "Problem",
      lessonsLearned: "Try",
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
      performanceOptimization: "Performance Optimization",
      databaseOptimization: "Database Optimization",
      apiDesign: "API Design",
      securityImplementation: "Security Implementation",
      testingStrategy: "Testing Strategy",
      retrospection: "KPT Retrospection",
      whatWorkedWell: "Keep",
      areasForImprovement: "Problem",
      lessonsLearned: "Try",
    },
    zh: {
      backToProjects: "返回项目列表",
      overview: "项目概述",
      techStack: "技术栈",
      projectInfo: "项目信息",
      projectOrigin: "项目来源",
      period: "期间",
      teamSize: "团队规模",
      myRole: "我的角色",
      people: "人",
      keyContributions: "主要贡献",
      challenges: "技术挑战",
      results: "项目成果",
      screenshots: "截图",
      viewGithub: "在GitHub上查看",
      viewLive: "查看演示",
      technologyReasons: "技术选择理由",
      architecture: "系统架构",
      performanceOptimization: "性能优化",
      databaseOptimization: "数据库优化",
      apiDesign: "API设计",
      securityImplementation: "安全实现",
      testingStrategy: "测试策略",
      retrospection: "KPT回顾",
      whatWorkedWell: "Keep",
      areasForImprovement: "Problem",
      lessonsLearned: "Try",
    },
  };

  const t = messages[locale] || messages.ko;
  const projectData = project as any;
  const title = 
    locale === "ko" ? project.title 
    : locale === "zh" ? (projectData.titleZh || project.titleEn || project.title)
    : (project.titleEn || project.title);
  const description =
    locale === "ko" ? project.description 
    : locale === "zh" ? (projectData.descriptionZh || project.descriptionEn || project.description)
    : (project.descriptionEn || project.description);

  return (
    <>
      <Navbar locale={locale} />
      <main className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16">
        <Container>
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href={`/${locale}#projects`}
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900 dark:!text-white dark:hover:text-white transition-colors duration-200"
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
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:!text-white mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-xs md:text-sm text-gray-600 dark:!text-white leading-relaxed max-w-3xl">
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
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                {/* Overview Section */}
                {projectData.overview && (
                  <section>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                      {t.overview}
                    </h2>
                    <Card hover={false} className="p-4 md:p-5">
                      <div className="text-xs text-gray-700 dark:!text-white">
                        <MarkdownContent
                          content={
                            locale === "ko"
                              ? projectData.overview
                              : locale === "zh"
                              ? (projectData.overviewZh || projectData.overviewEn || projectData.overview)
                              : (projectData.overviewEn || projectData.overview)
                          }
                        />
                      </div>
                    </Card>
                  </section>
                )}

                {/* Key Contributions */}
                {projectData.roleDetails &&
                  projectData.roleDetails.length > 0 && (
                    <section>
                      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                        {t.keyContributions}
                      </h2>
                      <Card hover={false} className="p-4 md:p-5">
                        <ul className="space-y-2.5 md:space-y-3">
                          {(locale === 'zh' && projectData.roleDetailsZh
                            ? projectData.roleDetailsZh
                            : locale === 'en' && projectData.roleDetailsEn
                            ? projectData.roleDetailsEn
                            : projectData.roleDetails).map(
                            (detail: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-xs text-gray-700 dark:!text-white"
                              >
                                <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-gray-400 dark:bg-slate-400" />
                                <div className="flex-1">
                                  <MarkdownContent content={detail} />
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </Card>
                    </section>
                  )}

                {/* Technical Challenges */}
                {projectData.challenges &&
                  projectData.challenges.length > 0 && (
                    <section>
                      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                        {t.challenges}
                      </h2>
                      <div className="space-y-3 md:space-y-4">
                        {projectData.challenges.map(
                          (challenge: any, idx: number) => (
                            <Card key={idx} hover={false} className="p-4 md:p-5">
                              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white mb-2">
                                {locale === "ko"
                                  ? challenge.problem
                                  : locale === "zh"
                                  ? (challenge.problemZh || challenge.problemEn || challenge.problem)
                                  : (challenge.problemEn || challenge.problem)}
                              </h3>
                              <div className="text-xs text-gray-600 dark:!text-white">
                                <MarkdownContent
                                  content={
                                    locale === "ko"
                                      ? challenge.solution
                                      : locale === "zh"
                                      ? (challenge.solutionZh || challenge.solutionEn || challenge.solution)
                                      : (challenge.solutionEn || challenge.solution)
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
                      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                        {t.results}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {projectData.results.map((result: any, idx: number) => (
                          <Card key={idx} hover={false} className="p-4 md:p-5 flex flex-col">
                            <div className="text-base md:text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">
                              {locale === "ko"
                                ? result.metric
                                : locale === "zh"
                                ? (result.metricZh || result.metricEn || result.metric)
                                : (result.metricEn || result.metric)}
                            </div>
                            <div className="text-xs text-gray-600 dark:!text-gray-300 flex-1">
                              <MarkdownContent
                                content={
                                  locale === "ko"
                                    ? result.description
                                    : locale === "zh"
                                    ? (result.descriptionZh || result.descriptionEn || result.description)
                                    : (result.descriptionEn || result.description)
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
                      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                        {t.technologyReasons}
                      </h2>
                      <div className="space-y-3 md:space-y-4">
                        {projectData.technologyReasons.map(
                          (tech: any, idx: number) => (
                            <Card key={idx} hover={false} className="p-4 md:p-5">
                              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white mb-2">
                                {tech.technology}
                              </h3>
                              <div className="text-xs text-gray-700 dark:!text-white">
                                <MarkdownContent
                                  content={
                                    locale === "ko"
                                      ? tech.reason
                                      : locale === "zh"
                                      ? (tech.reasonZh || tech.reasonEn || tech.reason)
                                      : (tech.reasonEn || tech.reason)
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
                      <div className="flex flex-row items-baseline gap-2 mb-3 md:mb-4">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white">
                          {t.architecture}
                        </h2>
                        <span className="text-xs text-gray-400 dark:!text-gray-500 italic">
                          {locale === 'ko' ? '클릭 시 확대됩니다.' : locale === 'zh' ? '点击放大。' : 'Click to enlarge.'}
                        </span>
                      </div>
                      <ArchitectureImages
                        images={projectData.architectureImages}
                        locale={locale}
                      />
                    </section>
                  )}

                {/* Performance Optimization */}
                {projectData.performanceOptimization &&
                  projectData.performanceOptimization.length > 0 && (
                    <section>
                      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                        {t.performanceOptimization}
                      </h2>
                      <div className="space-y-3 md:space-y-4">
                        {projectData.performanceOptimization.map(
                          (opt: any, idx: number) => (
                            <Card key={idx} hover={false} className="p-4 md:p-5">
                              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white mb-2">
                                {locale === "ko"
                                  ? opt.title
                                  : locale === "zh"
                                  ? (opt.titleZh || opt.titleEn || opt.title)
                                  : (opt.titleEn || opt.title)}
                              </h3>
                              <div className="text-xs text-gray-700 dark:!text-white">
                                <MarkdownContent
                                  content={
                                    locale === "ko"
                                      ? opt.description
                                      : locale === "zh"
                                      ? (opt.descriptionZh || opt.descriptionEn || opt.description)
                                      : (opt.descriptionEn || opt.description)
                                  }
                                />
                              </div>
                            </Card>
                          )
                        )}
                      </div>
                    </section>
                  )}

                {/* Database Optimization */}
                {projectData.databaseOptimization &&
                  projectData.databaseOptimization.length > 0 && (
                    <section>
                      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                        {t.databaseOptimization}
                      </h2>
                      <div className="space-y-3 md:space-y-4">
                        {projectData.databaseOptimization.map(
                          (db: any, idx: number) => (
                            <Card key={idx} hover={false} className="p-4 md:p-5">
                              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white mb-2">
                                {locale === "ko"
                                  ? db.title
                                  : locale === "zh"
                                  ? (db.titleZh || db.titleEn || db.title)
                                  : (db.titleEn || db.title)}
                              </h3>
                              <div className="text-xs text-gray-700 dark:!text-white">
                                <MarkdownContent
                                  content={
                                    locale === "ko"
                                      ? db.description
                                      : locale === "zh"
                                      ? (db.descriptionZh || db.descriptionEn || db.description)
                                      : (db.descriptionEn || db.description)
                                  }
                                />
                              </div>
                            </Card>
                          )
                        )}
                      </div>
                    </section>
                  )}

                {/* API Design */}
                {projectData.apiDesign && (
                  <section>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                      {t.apiDesign}
                    </h2>
                    <Card hover={false} className="p-4 md:p-5">
                      <div className="text-xs text-gray-700 dark:!text-white">
                        <MarkdownContent
                          content={
                            locale === "ko"
                              ? projectData.apiDesign
                              : locale === "zh"
                              ? (projectData.apiDesignZh || projectData.apiDesignEn || projectData.apiDesign)
                              : (projectData.apiDesignEn || projectData.apiDesign)
                          }
                        />
                      </div>
                    </Card>
                  </section>
                )}

                {/* Security Implementation */}
                {projectData.securityImplementation &&
                  projectData.securityImplementation.length > 0 && (
                    <section>
                      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                        {t.securityImplementation}
                      </h2>
                      <div className="space-y-3 md:space-y-4">
                        {projectData.securityImplementation.map(
                          (security: any, idx: number) => (
                            <Card key={idx} hover={false} className="p-4 md:p-5">
                              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white mb-2">
                                {locale === "ko"
                                  ? security.title
                                  : locale === "zh"
                                  ? (security.titleZh || security.titleEn || security.title)
                                  : (security.titleEn || security.title)}
                              </h3>
                              <div className="text-xs text-gray-700 dark:!text-white">
                                <MarkdownContent
                                  content={
                                    locale === "ko"
                                      ? security.description
                                      : locale === "zh"
                                      ? (security.descriptionZh || security.descriptionEn || security.description)
                                      : (security.descriptionEn || security.description)
                                  }
                                />
                              </div>
                            </Card>
                          )
                        )}
                      </div>
                    </section>
                  )}

                {/* Testing Strategy */}
                {projectData.testingStrategy && (
                  <section>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                      {t.testingStrategy}
                    </h2>
                    <Card hover={false} className="p-4 md:p-5">
                      <div className="text-xs text-gray-700 dark:!text-white">
                        <MarkdownContent
                          content={
                            locale === "ko"
                              ? projectData.testingStrategy
                              : locale === "zh"
                              ? (projectData.testingStrategyZh || projectData.testingStrategyEn || projectData.testingStrategy)
                              : (projectData.testingStrategyEn || projectData.testingStrategy)
                          }
                        />
                      </div>
                    </Card>
                  </section>
                )}

                {/* Project Retrospection */}
                {projectData.retrospection && (
                  <section>
                      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white mb-3 md:mb-4">
                        {t.retrospection}
                      </h2>
                      <div className="space-y-3 md:space-y-4">
                        {projectData.retrospection.whatWorkedWell && (
                          <Card hover={false} className="p-4 md:p-5">
                            <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                              {t.whatWorkedWell}
                            </h3>
                            <div className="text-xs text-gray-700 dark:!text-white">
                              <MarkdownContent
                                content={
                                  locale === "ko"
                                    ? projectData.retrospection.whatWorkedWell
                                    : locale === "zh"
                                    ? (projectData.retrospection.whatWorkedWellZh || projectData.retrospection.whatWorkedWellEn || projectData.retrospection.whatWorkedWell)
                                    : (projectData.retrospection.whatWorkedWellEn || projectData.retrospection.whatWorkedWell)
                                }
                              />
                            </div>
                        </Card>
                      )}
                        {projectData.retrospection.areasForImprovement && (
                          <Card hover={false} className="p-4 md:p-5">
                            <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                              {t.areasForImprovement}
                            </h3>
                            <div className="text-xs text-gray-700 dark:!text-white">
                              <MarkdownContent
                                content={
                                  locale === "ko"
                                    ? projectData.retrospection.areasForImprovement
                                    : locale === "zh"
                                    ? (projectData.retrospection.areasForImprovementZh || projectData.retrospection.areasForImprovementEn || projectData.retrospection.areasForImprovement)
                                    : (projectData.retrospection.areasForImprovementEn || projectData.retrospection.areasForImprovement)
                                }
                              />
                            </div>
                        </Card>
                      )}
                        {projectData.retrospection.lessonsLearned && (
                          <Card hover={false} className="p-4 md:p-5">
                            <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
                              {t.lessonsLearned}
                            </h3>
                            <div className="text-xs text-gray-700 dark:!text-white">
                              <MarkdownContent
                                content={
                                  locale === "ko"
                                    ? projectData.retrospection.lessonsLearned
                                    : locale === "zh"
                                    ? (projectData.retrospection.lessonsLearnedZh || projectData.retrospection.lessonsLearnedEn || projectData.retrospection.lessonsLearned)
                                    : (projectData.retrospection.lessonsLearnedEn || projectData.retrospection.lessonsLearned)
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
                    <h3 className="text-xs md:text-sm font-semibold text-gray-900 dark:!text-white mb-4 md:mb-6">
                      {t.projectInfo}
                    </h3>
                    <div className="space-y-4 md:space-y-5">
                      {projectData.projectOrigin && (
                        <div>
                          <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-500 dark:!text-white mb-1.5 md:mb-2">
                            {t.projectOrigin}
                          </div>
                          <div className="text-xs font-medium text-gray-900 dark:!text-white">
                            {locale === "ko"
                              ? projectData.projectOrigin
                              : locale === "zh"
                              ? (projectData.projectOriginZh || projectData.projectOriginEn || projectData.projectOrigin)
                              : (projectData.projectOriginEn || projectData.projectOrigin)}
                          </div>
                        </div>
                      )}
                      {projectData.period && (
                        <div>
                          <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-500 dark:!text-white mb-1.5 md:mb-2">
                            {t.period}
                          </div>
                          <div className="text-xs font-medium text-gray-900 dark:!text-white">
                            {projectData.period}
                          </div>
                        </div>
                      )}
                      {(projectData.teamComposition || projectData.teamSize) && (
                        <div>
                          <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-500 dark:!text-white mb-1.5 md:mb-2">
                            {t.teamSize}
                          </div>
                          <div className="text-xs font-medium text-gray-900 dark:!text-white">
                            {projectData.teamComposition || `${projectData.teamSize} ${t.people}`}
                          </div>
                        </div>
                      )}
                      {projectData.myRole && (
                        <div>
                          <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-500 dark:!text-white mb-1.5 md:mb-2">
                            {t.myRole}
                          </div>
                          <div className="text-xs font-medium text-gray-900 dark:!text-white">
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
                    <h3 className="text-xs md:text-sm font-semibold text-gray-900 dark:!text-white mb-3 md:mb-4">
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
                <div className="flex flex-row items-baseline gap-2 mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:!text-white">
                    {t.screenshots}
                  </h2>
                  <span className="text-xs text-gray-400 dark:!text-gray-500 italic">
                    {locale === 'ko' ? '클릭 시 확대됩니다.' : locale === 'zh' ? '点击放大。' : 'Click to enlarge.'}
                  </span>
                </div>
                <ProjectScreenshots
                  images={project.images}
                  title={title}
                  locale={locale}
                  screenshotType={project.screenshotType}
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
