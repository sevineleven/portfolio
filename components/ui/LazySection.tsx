"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

export default function LazySection({
  children,
  fallback,
  rootMargin = '200px',
  minHeight = '400px',
}: LazySectionProps) {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // IntersectionObserver가 지원되지 않는 경우 즉시 로드
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      setHasLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsInView(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, hasLoaded]);

  return (
    <div ref={containerRef} style={{ minHeight: hasLoaded ? 'auto' : minHeight }}>
      {isInView ? children : (fallback || <div style={{ minHeight }} />)}
    </div>
  );
}
