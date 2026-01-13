'use client';

import Image from 'next/image';
import { useState } from 'react';
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

  // 전체 이미지를 2개씩 묶어서 행으로 구성
  const imageRows: Array<Array<{ item: string | ImageItem; idx: number; title: string | null }>> = [];
  for (let i = 0; i < validImageItems.length; i += 2) {
    imageRows.push(validImageItems.slice(i, i + 2));
  }

  // 첫 번째 이미지의 제목을 확인 (같은 제목인 경우 제목 표시)
  const firstTitle = validImageItems.length > 0 ? validImageItems[0].title : null;
  // 모든 이미지가 같은 제목을 가지고 있는지 확인 (null도 고려)
  const allSameTitle = firstTitle !== null && validImageItems.every(img => img.title === firstTitle);

  return (
    <div className="space-y-8 w-full">
      {allSameTitle && firstTitle && (
        <h3 className="text-lg font-semibold text-gray-900 dark:!text-white mb-6">
          {firstTitle}
        </h3>
      )}
      <div className="space-y-6">
        {imageRows.map((row, rowIdx) => (
          <div key={rowIdx} className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {row.map(({ item, idx, title: imageTitle }) => {
              const imageUrl = getImageUrl(item);
              
              // 같은 제목이 아닌 경우에만 각 이미지에 제목 표시
              const showTitle = !allSameTitle && imageTitle;

              return (
                <div key={idx}>
                  {showTitle && (
                    <h4 className="text-md font-semibold text-gray-900 dark:!text-white mb-3">
                      {imageTitle}
                    </h4>
                  )}
                  <div className="aspect-[9/16] w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800/50">
                    <Image
                      src={imageUrl}
                      alt={imageTitle || `${title} screenshot ${idx + 1}`}
                      width={375}
                      height={667}
                      className="w-full h-full object-contain"
                      unoptimized={imageUrl.startsWith('http')}
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
}
