interface ChipProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export default function Chip({ children, className = '', onClick, active = false }: ChipProps) {
  const baseClass = 'inline-flex items-center rounded-full px-2 md:px-2.5 py-0.5 md:py-1 text-[10px] md:text-xs font-medium transition-all duration-150';
  const activeClass = active
    ? 'bg-black !text-white dark:bg-slate-600 dark:!text-white dark:hover:bg-slate-600'
    : 'bg-gray-100 !text-gray-700 hover:bg-gray-200 hover:opacity-90 dark:bg-slate-700/80 dark:!text-white dark:hover:bg-slate-600 dark:hover:opacity-90';
  const clickableClass = onClick ? 'cursor-pointer' : '';
  
  return (
    <span
      className={`chip-component ${baseClass} ${activeClass} ${clickableClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
}

