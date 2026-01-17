"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "../ui/Card";

interface ArchitectureImage {
  url: string;
  title: string;
  titleEn?: string;
  titleZh?: string;
  description: string;
  descriptionEn?: string;
  descriptionZh?: string;
}

interface ArchitectureImagesProps {
  images: ArchitectureImage[];
  locale: "ko" | "en" | "zh";
}

export default function ArchitectureImages({
  images,
  locale,
}: ArchitectureImagesProps) {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const openModal = (url: string, title: string) => {
    setSelectedImage({ url, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="space-y-4 md:space-y-6">
        {images.map((arch, idx) => {
          const title =
            locale === "ko"
              ? arch.title
              : locale === "zh"
              ? arch.titleZh || arch.titleEn || arch.title
              : arch.titleEn || arch.title;

          return (
            <Card key={idx} hover={false} className="p-4 md:p-5">
              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white mb-2">
                {title}
              </h3>
              <div
                className="mb-3 md:mb-4 aspect-video w-full rounded-lg overflow-hidden bg-gray-200 dark:bg-slate-800/50 relative cursor-pointer group"
                onClick={() => openModal(arch.url, title)}
              >
                <Image
                  src={arch.url}
                  alt={title}
                  fill
                  className="object-contain"
                  unoptimized={arch.url.startsWith("http")}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:!text-white mt-3 md:mt-4">
                {locale === "ko"
                  ? arch.description
                  : locale === "zh"
                  ? arch.descriptionZh ||
                    arch.descriptionEn ||
                    arch.description
                  : arch.descriptionEn || arch.description}
              </p>
            </Card>
          );
        })}
      </div>

      {/* 확대 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
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
                alt={selectedImage.title || "확대 이미지"}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* 안내 문구 */}
            <p className="text-white/80 text-sm mt-4 text-center">
              {locale === "ko"
                ? "클릭하여 닫기"
                : locale === "zh"
                ? "点击关闭"
                : "Click to close"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
