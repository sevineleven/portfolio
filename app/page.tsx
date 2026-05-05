import Link from 'next/link';
import { personalInfo, experiences, projects, skills } from '@/data/portfolio';
import TableOfContents from '@/components/TableOfContents';
import ThemeToggle from '@/components/ThemeToggle';

const CONTAINER = { maxWidth: 720, margin: '0 auto', padding: '0 24px' };

function SectionLabel({ cmd, arg }: { cmd: string; arg: string }) {
  return (
    <div className="section-label">
      <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>$</span>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
        {cmd} <span style={{ color: 'var(--blue)' }}>{arg}</span>
      </span>
      <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 40, borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11 }}>
              <span style={{ color: 'var(--green)' }}>sevineleven</span>
              <span style={{ color: 'var(--muted)' }}>@dev</span>
              <span style={{ color: 'var(--muted)', margin: '0 6px' }}>:</span>
              <span style={{ color: 'var(--blue)' }}>~/portfolio</span>
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <ThemeToggle />
              <a href="mailto:psv980817@naver.com" style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', textDecoration: 'none' }}>
                psv980817@naver.com
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, height: 44 }}>
            <a href="https://blog.sevin.dev" className="nav-link"
              style={{ fontFamily: 'var(--mono)', fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <span style={{ color: 'var(--green)' }}>$</span>
              <span style={{ color: 'var(--text)' }}>cd</span>
              <span style={{ color: 'var(--blue)' }}>~/blog</span>
            </a>
            <span style={{ width: 1, height: 14, background: 'var(--border)', flexShrink: 0 }} />
            {['whoami', 'experience', 'projects', 'skills'].map((section) => (
              <a key={section} href={`#${section}`} className="nav-link"
                style={{ fontFamily: 'var(--mono)', fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                <span style={{ color: 'var(--purple)' }}>#</span>
                <span style={{ color: 'var(--text)' }}>{section}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <TableOfContents />

      <main style={CONTAINER}>

        {/* whoami */}
        <section id="whoami" style={{ paddingTop: 64, paddingBottom: 48, borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--green)' }}>$</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text)' }}>whoami</span>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 13, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 32 }}>
            <div><span style={{ color: 'var(--blue)', marginRight: 12 }}>name</span><span style={{ color: 'var(--text)' }}>parksevin</span></div>
            <div><span style={{ color: 'var(--blue)', marginRight: 16 }}>role</span><span style={{ color: 'var(--text)' }}>backend engineer</span></div>
            <div><span style={{ color: 'var(--blue)', marginRight: 11 }}>stack</span><span style={{ color: 'var(--text)' }}>Spring Boot · Java · MySQL</span></div>
            <div><span style={{ color: 'var(--blue)', marginRight: 2 }}>github</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="whoami-link">github.com/sevineleven</a>
            </div>
            <div><span style={{ color: 'var(--blue)', marginRight: -1 }}>linkedin</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="whoami-link" style={{ marginLeft: 4 }}>linkedin.com/in/sevin-park</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {personalInfo.philosophy.map((p, i) => (
              <div key={i} style={{ paddingLeft: 16, borderLeft: '2px solid var(--border)' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.7 }}>{p.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* experience */}
        <section id="experience">
          <SectionLabel cmd="cat" arg="career.log" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {experiences.map((exp, i) => (
              <div key={i}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 8, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{exp.title}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--blue)', marginTop: 2 }}>{exp.company}</div>
                  </div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', whiteSpace: 'nowrap' }}>{exp.period}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text)', marginBottom: 16, lineHeight: 1.7 }}>{exp.description}</p>

                {exp.workItems && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {exp.workItems.map((group, gi) => (
                      <div key={gi} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: '16px 20px' }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--green)', marginBottom: 10 }}>{group.title}</div>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {group.items.map((item, ii) => (
                            <li key={ii}>
                              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>
                                <span style={{ color: 'var(--muted)', marginRight: 6, fontFamily: 'var(--mono)' }}>▸</span>
                                {item.name}
                              </div>
                              <div style={{ fontSize: 12, color: 'var(--text)', lineHeight: 1.7, paddingLeft: 18 }}>{item.description}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {exp.award && (
                  <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {exp.award.map((a, ai) => (
                      <div key={ai} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: 'rgba(245,197,66,0.05)', border: '1px solid rgba(245,197,66,0.2)', borderRadius: 6 }}>
                        <span style={{ color: 'var(--yellow)' }}>★</span>
                        <div>
                          <span style={{ fontSize: 13, color: 'var(--text)' }}>{a.title}</span>
                          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', marginLeft: 10 }}>{a.organization} · {a.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* projects */}
        <section id="projects">
          <SectionLabel cmd="ls -la" arg="projects/" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {projects.map((p) => (
              <Link key={p.id} href={`/projects/${p.id}`} className="project-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)' }}>▸</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{p.title}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>{p.period}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.7, marginBottom: 14 }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map((t) => (
                    <span key={t} className="skill-chip">{t}</span>
                  ))}
                </div>
                {p.teamComposition && (
                  <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text)' }}>
                    {p.teamComposition} · {p.myRole}
                    {p.projectOrigin && <span style={{ marginLeft: 10, color: 'var(--muted)' }}>· {p.projectOrigin}</span>}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* skills */}
        <section id="skills">
          <SectionLabel cmd="cat" arg="stack.txt" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {skills.map((s) => (
              <div key={s.category} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text)', minWidth: 140, paddingTop: 3 }}>{s.category}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.items.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* contact */}
        <section style={{ paddingTop: 80, paddingBottom: 80, borderTop: '1px solid var(--border)', marginTop: 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--green)' }}>$</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text)' }}>echo $contact</span>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 13, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div>
              <span style={{ color: 'var(--blue)', marginRight: 12 }}>email</span>
              <a href="mailto:psv980817@naver.com" className="whoami-link">psv980817@naver.com</a>
            </div>
            <div>
              <span style={{ color: 'var(--blue)', marginRight: 6 }}>github</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="whoami-link">github.com/sevineleven</a>
            </div>
            <div>
              <span style={{ color: 'var(--blue)', marginRight: -1 }}>linkedin</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="whoami-link" style={{ marginLeft: 4 }}>linkedin.com/in/sevin-park</a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
