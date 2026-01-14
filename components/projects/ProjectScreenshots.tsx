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
  const containerRef = useRef<HTMLDivElement>(null);
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // GIF는 일반 img 태그 사용 (Next.js Image는 GIF 최적화 불가)
  if (isGif) {
    return (
      <div ref={containerRef} className="w-full h-full flex items-center justify-center">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={onError}
        />
      </div>
    );
  }

  // 일반 이미지는 Next.js Image 사용
  return (
    <div ref={containerRef}>
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
    </div>
  );
}

export default function ProjectScreenshots({
  images,
  title,
  locale,
}: ProjectScreenshotsProps) {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string | null } | null>(null);

  const handleImageError = (idx: number) => {
    setFailedImages((prev) => new Set(prev).add(idx));
  };

  const openModal = (url: string, title: string | null) => {
    setSelectedImage({ url, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
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
    <>
      <div className="grid grid-cols-2 gap-4 w-full">
        {Array.from(groupedImages.entries()).map(([groupTitle, groupImages], groupIdx) => {
          return (
            <div
              key={groupIdx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 border border-gray-200 dark:border-gray-700"
            >
              {/* 카드 제목 - 가운데 정렬 */}
              {groupTitle !== '기타' && (
                <h3 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {groupTitle}
                </h3>
              )}
              
              {/* 이미지 그리드 - 1열로 세로 배치 */}
              <div className="flex flex-col gap-2 items-center">
                {groupImages.map(({ item, idx, title: imageTitle }) => {
                  const imageUrl = getImageUrl(item);

                  return (
                    <div 
                      key={idx} 
                      className="w-full flex justify-center cursor-pointer group"
                      onClick={() => openModal(imageUrl, imageTitle)}
                    >
                      <div className="aspect-[9/16] w-full max-w-[160px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900/50 relative flex items-center justify-center p-1 group-hover:ring-2 group-hover:ring-blue-500 transition-all">
                        <OptimizedImage
                          src={imageUrl}
                          alt={imageTitle || `${title} screenshot ${idx + 1}`}
                          className="w-full h-full rounded-xl"
                          onError={() => handleImageError(idx)}
                        />
                        {/* 확대 아이콘 오버레이 */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-gray-800/90 rounded-full p-2">
                            <svg 
                              className="w-5 h-5 text-gray-700 dark:text-gray-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 확대 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full h-full flex flex-col items-center justify-center">
            {/* 닫기 버튼 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
            >
              <svg 
                className="w-6 h-6 text-gray-700 dark:text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 이미지 제목 */}
            {selectedImage.title && (
              <h3 className="text-white text-lg md:text-xl font-semibold mb-4 text-center">
                {selectedImage.title}
              </h3>
            )}

            {/* 확대된 이미지 */}
            <div className="flex items-center justify-center max-h-[80vh]">
              <img
                src={selectedImage.url}
                alt={selectedImage.title || '확대 이미지'}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* 안내 문구 */}
            <p className="text-white/80 text-sm mt-4 text-center">
              클릭하여 닫기
            </p>
          </div>
        </div>
      )}
    </>
  );
}
