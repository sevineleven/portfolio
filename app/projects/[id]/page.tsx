import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/portfolio';
import TableOfContents from '@/components/TableOfContents';

const CONTAINER = { maxWidth: 720, margin: '0 auto', padding: '0 24px' };

function Bold({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={i} style={{ color: 'var(--text)', fontWeight: 600 }}>{part.slice(2, -2)}</strong>
          : part
      )}
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) notFound();

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(15,15,18,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 40, borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11 }}>
              <span style={{ color: 'var(--green)' }}>sevineleven</span>
              <span style={{ color: 'var(--muted)' }}>@dev</span>
              <span style={{ color: 'var(--muted)', margin: '0 6px' }}>:</span>
              <span style={{ color: 'var(--blue)' }}>~/portfolio/projects/{project.id}</span>
            </span>
            <a href="mailto:psv980817@naver.com" style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', textDecoration: 'none' }}>
              psv980817@naver.com
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', height: 44 }}>
            <Link href="/" className="nav-link" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
              ← cd ..
            </Link>
          </div>
        </div>
      </nav>

      <TableOfContents sections={[
        { id: 'proj-overview',      label: 'overview.md' },
        { id: 'proj-role',          label: 'role.md' },
        { id: 'proj-highlights',    label: 'highlights.md' },
        { id: 'proj-challenges',    label: 'challenges.md' },
        { id: 'proj-architecture',  label: 'architecture/' },
        { id: 'proj-screenshots',   label: 'screenshots/' },
        { id: 'proj-results',       label: 'results.md' },
        { id: 'proj-retrospection', label: 'retrospection.md' },
      ]} />

      <main style={CONTAINER}>

        {/* 헤더 */}
        <section style={{ paddingTop: 64, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--green)' }}>$</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)' }}>cat projects/{project.id}/README.md</span>
          </div>

          <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
            {project.title}
          </h1>

          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--dim)', display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
            <span style={{ color: 'var(--muted)' }}>{project.period}</span>
            {project.teamComposition && <span>{project.teamComposition}</span>}
            {project.myRole && <span style={{ color: 'var(--blue)' }}>{project.myRole}</span>}
            {project.projectOrigin && <span style={{ color: 'var(--purple)', opacity: 0.8 }}>{project.projectOrigin}</span>}
          </div>

          <p style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.8, marginBottom: 24 }}>
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
            {project.tags.map((t: string) => (
              <span key={t} className="skill-chip">{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--mono)', fontSize: 12,
                color: 'var(--green)', textDecoration: 'none',
                padding: '6px 14px', borderRadius: 6,
                border: '1px solid rgba(61,214,140,0.3)',
                background: 'rgba(61,214,140,0.05)',
              }}>
                ▸ github
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--mono)', fontSize: 12,
                color: 'var(--blue)', textDecoration: 'none',
                padding: '6px 14px', borderRadius: 6,
                border: '1px solid rgba(90,172,240,0.3)',
                background: 'rgba(90,172,240,0.05)',
              }}>
                ▸ live
              </a>
            )}
          </div>
        </section>

        {/* 개요 */}
        {project.overview && (
          <section id="proj-overview" style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>$</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>cat overview.md</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <div style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.9 }}>
              {project.overview.split('\n\n').map((para: string, i: number) => (
                <p key={i} style={{ marginBottom: 16 }}>
                  {para.split(/(\*\*[^*]+\*\*)/).map((part: string, j: number) =>
                    part.startsWith('**') && part.endsWith('**')
                      ? <strong key={j} style={{ color: 'var(--text)', fontWeight: 600 }}>{part.slice(2, -2)}</strong>
                      : part
                  )}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* 담당 역할 */}
        {project.roleDetails && project.roleDetails.length > 0 && (
          <section id="proj-role" style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>$</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>cat role.md</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {project.roleDetails.map((item: string, i: number) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--dim)', lineHeight: 1.7 }}>
                  <span style={{ fontFamily: 'var(--mono)', color: 'var(--green)', flexShrink: 0, paddingTop: 2 }}>▸</span>
                  <span><Bold text={item} /></span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 기술적 하이라이트 */}
        {project.technicalHighlights && project.technicalHighlights.length > 0 && (
          <section id="proj-highlights" style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>$</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>cat highlights.md</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {project.technicalHighlights.map((h: { title: string; description: string }, i: number) => (
                <div key={i} style={{ padding: '16px 20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--blue)', marginBottom: 8 }}>{h.title}</div>
                  <p style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}><Bold text={h.description} /></p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 도전과 해결 */}
        {project.challenges && project.challenges.length > 0 && (
          <section id="proj-challenges" style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>$</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>cat challenges.md</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {project.challenges.map((c: { problem: string; solution: string }, i: number) => (
                <div key={i} style={{ borderLeft: '2px solid var(--border)', paddingLeft: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--yellow)', marginRight: 8 }}>problem</span>
                    {c.problem}
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--green)', marginRight: 8 }}>solution</span>
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 아키텍처 이미지 */}
        {project.architectureImages && project.architectureImages.length > 0 && (
          <section id="proj-architecture" style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>$</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>ls architecture/</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {project.architectureImages.map((img: { url: string; title: string; description: string }, i: number) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--blue)', marginBottom: 8 }}>{img.title}</div>
                  <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)', marginBottom: 8 }}>
                    <Image src={img.url} alt={img.title} width={720} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>{img.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 스크린샷 */}
        {project.images && project.images.length > 0 && (
          <section id="proj-screenshots" style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>$</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>ls screenshots/</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
              {project.images.map((img: { url: string; title: string }, i: number) => (
                <div key={i} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface)' }}>
                  <Image src={img.url} alt={img.title} width={400} height={280} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', padding: '8px 12px' }}>{img.title}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 결과 */}
        {project.results && project.results.length > 0 && (
          <section id="proj-results" style={{ paddingTop: 48, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>$</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>cat results.md</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {project.results.map((r: { metric: string; description: string }, i: number) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)', flexShrink: 0 }}>▸</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{r.metric}</div>
                    <p style={{ fontSize: 12, color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 회고 */}
        {project.retrospection && (
          <section id="proj-retrospection" style={{ paddingTop: 48, paddingBottom: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>$</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>cat retrospection.md</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {project.retrospection.whatWorkedWell && (
                <div style={{ paddingLeft: 16, borderLeft: '2px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--green)', marginBottom: 10 }}>잘 됐던 것</div>
                  <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.8 }}>
                    {project.retrospection.whatWorkedWell.split('\n\n').map((p: string, i: number) => (
                      <p key={i} style={{ marginBottom: 8 }}><Bold text={p} /></p>
                    ))}
                  </div>
                </div>
              )}
              {project.retrospection.areasForImprovement && (
                <div style={{ paddingLeft: 16, borderLeft: '2px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--yellow)', marginBottom: 10 }}>개선할 것</div>
                  <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.8 }}>
                    {project.retrospection.areasForImprovement.split('\n\n').map((p: string, i: number) => (
                      <p key={i} style={{ marginBottom: 8 }}><Bold text={p} /></p>
                    ))}
                  </div>
                </div>
              )}
              {project.retrospection.lessonsLearned && (
                <div style={{ paddingLeft: 16, borderLeft: '2px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--blue)', marginBottom: 10 }}>배운 것</div>
                  <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.8 }}>
                    {project.retrospection.lessonsLearned.split('\n\n').map((p: string, i: number) => (
                      <p key={i} style={{ marginBottom: 8 }}><Bold text={p} /></p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

      </main>
    </>
  );
}
