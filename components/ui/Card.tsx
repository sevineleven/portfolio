import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  // hover prop이 false가 아니고, className에 이미 transition이 없는 경우에만 hover 효과 적용
  const hoverClass = hover && !className.includes('group-hover')
    ? 'transition-all duration-150 hover:border-gray-300 dark:hover:border-slate-400 hover:opacity-95'
    : '';
  
  return (
    <div className={`card-component rounded-lg border border-gray-200 p-6 dark:border-slate-600 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

