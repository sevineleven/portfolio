interface ChipProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export default function Chip({ children, className = '', onClick, active = false }: ChipProps) {
  const baseClass = 'inline-flex items-center rounded-full px-2 md:px-2.5 py-0.5 md:py-1 text-[10px] md:text-xs font-medium transition-all duration-150';
  const activeClass = active ? 'chip-active' : 'chip-default';
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

