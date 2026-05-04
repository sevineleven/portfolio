'use client';

import { useEffect, useState } from 'react';

export interface TocSection {
  id: string;
  label: string;
}

const DEFAULT_SECTIONS: TocSection[] = [
  { id: 'whoami',     label: 'whoami' },
  { id: 'experience', label: 'career.log' },
  { id: 'projects',   label: 'projects/' },
  { id: 'skills',     label: 'stack.txt' },
];

export default function TableOfContents({ sections = DEFAULT_SECTIONS }: { sections?: TocSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? '');
  const [visible, setVisible] = useState<string[]>([]);

  useEffect(() => {
    // 실제 DOM에 존재하는 섹션만 표시
    const existing = sections.filter((s) => document.getElementById(s.id));
    setVisible(existing.map((s) => s.id));
    if (existing.length > 0) setActive(existing[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -70% 0px' },
    );

    existing.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const shown = sections.filter((s) => visible.includes(s.id));
  if (shown.length === 0) return null;

  return (
    <nav className="toc">
      {shown.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a key={id} href={`#${id}`} className={`toc-item${isActive ? ' toc-active' : ''}`}>
            <span className="toc-dot" style={{ background: isActive ? 'var(--green)' : 'var(--border)' }} />
            <span>$ {label}</span>
          </a>
        );
      })}
    </nav>
  );
}
