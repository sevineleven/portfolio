'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Locale } from '@/i18n';

interface ImageItem {
  url: string;
  title?: string;
  titleEn?: string;
}

interface ProjectScreenshotsProps {
  images: string[] | ImageItem[];
  title: string;
  locale: Locale;
}

// GIF 최적화를 위한 컴포넌트
function OptimizedImage({ 
  src, 
  alt, 
  className,
  onError 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  onError?: () => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isGif = src.toLowerCase().endsWith('.gif');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' } // 뷰포트 50px 전에 미리 로드
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // GIF는 일반 img 태그 사용 (Next.js Image는 GIF 최적화 불가)
  if (isGif) {
    return (
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={onError}
      />
    );
  }

  // 일반 이미지는 Next.js Image 사용
  return (
    <Image
      src={src}
      alt={alt}
      width={375}
      height={667}
      className={className}
      unoptimized={src.startsWith('http')}
      loading="lazy"
      onError={onError}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );
}

export default function ProjectScreenshots({
  images,
  title,
  locale,
}: ProjectScreenshotsProps) {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (idx: number) => {
    setFailedImages((prev) => new Set(prev).add(idx));
  };

  // 이미지 배열이 string[]인지 ImageItem[]인지 확인
  const isStringArray = images.length > 0 && typeof images[0] === 'string';
  
  const getImageUrl = (item: string | ImageItem): string => {
    return typeof item === 'string' ? item : item.url;
  };

  const getImageTitle = (item: string | ImageItem): string | null => {
    if (typeof item === 'string') return null;
    const title = locale === 'ko' ? item.title : (item.titleEn || item.title);
    return title && title.trim() ? title : null;
  };

  const validImages = images.filter((_, idx) => !failedImages.has(idx));

  if (validImages.length === 0) {
    return null;
  }

  // 유효한 이미지들을 인덱스와 함께 수집
  const validImageItems: Array<{ item: string | ImageItem; idx: number; title: string | null }> = [];
  images.forEach((item, idx) => {
    if (!failedImages.has(idx)) {
      validImageItems.push({
        item,
        idx,
        title: getImageTitle(item),
      });
    }
  });

  // 제목별로 이미지 그룹화
  const groupedImages: Map<string | null, Array<{ item: string | ImageItem; idx: number; title: string | null }>> = new Map();
  validImageItems.forEach((imageItem) => {
    const groupKey = imageItem.title || '기타';
    if (!groupedImages.has(groupKey)) {
      groupedImages.set(groupKey, []);
    }
    groupedImages.get(groupKey)!.push(imageItem);
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
      {Array.from(groupedImages.entries()).map(([groupTitle, groupImages], groupIdx) => {
        // 각 그룹을 2개씩 묶어서 행으로 구성
        const imageRows: Array<Array<{ item: string | ImageItem; idx: number; title: string | null }>> = [];
        for (let i = 0; i < groupImages.length; i += 2) {
          imageRows.push(groupImages.slice(i, i + 2));
        }

        return (
          <div
            key={groupIdx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700"
          >
            {/* 카드 제목 - 가운데 정렬 */}
            {groupTitle !== '기타' && (
              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {groupTitle}
              </h3>
            )}
            
            {/* 이미지 그리드 */}
            <div className="space-y-3">
              {imageRows.map((row, rowIdx) => (
                <div key={rowIdx} className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                  {row.map(({ item, idx, title: imageTitle }) => {
                    const imageUrl = getImageUrl(item);

                    return (
                      <div key={idx} className="flex justify-center">
                        <div className="aspect-[9/16] w-full max-w-[200px] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900/50 relative">
                          <OptimizedImage
                            src={imageUrl}
                            alt={imageTitle || `${title} screenshot ${idx + 1}`}
                            className="w-full h-full object-contain"
                            onError={() => handleImageError(idx)}
                          />
                        </div>
                      </div>
                    );
                  })}
                  {/* 홀수 개일 경우 빈 공간 채우기 */}
                  {row.length === 1 && <div></div>}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
