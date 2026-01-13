import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonProps) {
  const baseClass = 'inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 text-base md:text-lg font-medium transition-all duration-150 button-component [text-shadow:none]';
  
  const variants = {
    primary: 'rounded-lg border border-gray-300 bg-white !text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:opacity-90 dark:border-slate-600 dark:bg-slate-700 dark:!text-white dark:hover:bg-slate-600 dark:hover:border-slate-400 button-primary',
    secondary: 'rounded-full bg-gray-100 !text-gray-900 hover:bg-gray-200 hover:opacity-90 dark:bg-slate-800/90 dark:!text-white dark:hover:bg-slate-700 button-secondary',
    outline: 'rounded-full border-2 border-black bg-transparent !text-black hover:bg-black hover:!text-white hover:opacity-90 dark:border-slate-400 dark:!text-white dark:hover:bg-slate-800 dark:hover:border-slate-300 button-outline',
  };

  const buttonClass = `${baseClass} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}

