'use client';

import { ReactNode, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (variant === 'outline' && mounted && buttonRef.current) {
      if (theme === 'dark') {
        buttonRef.current.style.setProperty('color', '#ffffff', 'important');
        const svg = buttonRef.current.querySelector('svg');
        if (svg) {
          svg.style.setProperty('fill', 'currentColor', 'important');
        }
      } else {
        buttonRef.current.style.setProperty('color', '#000000', 'important');
        const svg = buttonRef.current.querySelector('svg');
        if (svg) {
          svg.style.setProperty('fill', 'currentColor', 'important');
        }
      }
    }
  }, [variant, mounted, theme]);

  const baseClass = 'inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base font-medium transition-all duration-150 button-component [text-shadow:none]';
  
  const variants = {
    primary: 'rounded-md border border-gray-300 bg-white !text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:opacity-90 dark:border-slate-600 dark:bg-slate-700 dark:!text-white dark:hover:bg-slate-600 dark:hover:border-slate-400 button-primary',
    secondary: 'rounded-md bg-gray-100 !text-gray-900 hover:bg-gray-200 hover:opacity-90 dark:bg-slate-800/90 dark:!text-white dark:hover:bg-slate-700 button-secondary',
    outline: 'rounded-md border-2 border-black bg-transparent !text-black hover:bg-black hover:!text-white hover:opacity-90 button-outline',
  };

  const buttonClass = `${baseClass} ${variants[variant]} ${className}`;
  
  // outline variant의 다크모드 스타일을 인라인으로 적용
  const outlineStyle = variant === 'outline' && mounted && theme === 'dark' ? {
    borderColor: '#ffffff',
    color: '#ffffff',
  } : variant === 'outline' ? {
    borderColor: '#000000',
    color: '#000000',
  } : {};

  const outlineHoverStyle = variant === 'outline' && mounted && theme === 'dark' ? {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.backgroundColor = '#000000';
      e.currentTarget.style.borderColor = '#ffffff';
      e.currentTarget.style.setProperty('color', '#ffffff', 'important');
      // 모든 자식 요소의 색상도 변경
      const children = e.currentTarget.querySelectorAll('*');
      children.forEach((child) => {
        (child as HTMLElement).style.setProperty('color', '#ffffff', 'important');
        if (child.tagName === 'svg') {
          (child as HTMLElement).style.setProperty('fill', 'currentColor', 'important');
        }
      });
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.borderColor = '#ffffff';
      e.currentTarget.style.setProperty('color', '#ffffff', 'important');
      // 모든 자식 요소의 색상도 변경
      const children = e.currentTarget.querySelectorAll('*');
      children.forEach((child) => {
        (child as HTMLElement).style.setProperty('color', '#ffffff', 'important');
        if (child.tagName === 'svg') {
          (child as HTMLElement).style.setProperty('fill', 'currentColor', 'important');
        }
      });
    },
  } : variant === 'outline' ? {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.backgroundColor = '#000000';
      e.currentTarget.style.setProperty('color', '#ffffff', 'important');
      const svg = e.currentTarget.querySelector('svg');
      if (svg) {
        svg.style.setProperty('fill', '#ffffff', 'important');
        svg.style.setProperty('color', '#ffffff', 'important');
      }
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.setProperty('color', '#000000', 'important');
      const svg = e.currentTarget.querySelector('svg');
      if (svg) {
        svg.style.setProperty('fill', '#000000', 'important');
        svg.style.setProperty('color', '#000000', 'important');
      }
    },
  } : {};

  const commonProps = {
    ref: buttonRef as any,
    className: buttonClass,
    style: outlineStyle as React.CSSProperties,
    ...outlineHoverStyle,
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...commonProps}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} {...commonProps}>
      {children}
    </button>
  );
}

