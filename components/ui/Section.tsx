import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'alternate';
}

export default function Section({ id, children, className = '', variant = 'default' }: SectionProps) {
  const bgClass = variant === 'alternate' 
    ? 'bg-gray-50/50 dark:bg-transparent' 
    : '';
  
  return (
    <section id={id} className={`relative py-32 md:py-48 ${bgClass} ${className}`}>
      {/* 섹션 구분선 */}
      {id !== 'hero' && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="w-24 h-px bg-white/20 dark:bg-white/30"></div>
        </div>
      )}
      <Container>{children}</Container>
    </section>
  );
}

