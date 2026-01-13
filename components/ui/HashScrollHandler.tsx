"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // URL에 해시가 있는 경우 스크롤 처리
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1); // # 제거
        const element = document.getElementById(id);
        if (element) {
          // 약간의 지연 후 스크롤 (페이지 렌더링 완료 대기)
          setTimeout(() => {
            const offset = 80; // Navbar height offset
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
              top: Math.max(0, elementPosition),
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    // 초기 로드 시 또는 pathname 변경 시
    handleHashScroll();

    // 해시 변경 감지
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [pathname]);

  return null;
}
