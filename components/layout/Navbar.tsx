"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Locale } from "@/i18n";
import { useTranslations } from "@/lib/i18n";

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations(locale);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = useMemo(
    () => [
      { id: "hero", label: t("nav.about") || "About" },
      { id: "experience", label: t("nav.experience") || "Experience" },
      { id: "projects", label: t("nav.projects") || "Projects" },
      { id: "skills", label: t("nav.skills") || "Skills" },
      { id: "contact", label: t("nav.contact") || "Contact" },
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id);
          if (element) {
            return {
              id: item.id,
              top: element.offsetTop - 100,
              bottom: element.offsetTop + element.offsetHeight - 100,
            };
          }
          return null;
        })
        .filter(Boolean);

      const current = sections.find(
        (section) =>
          section &&
          window.scrollY >= section.top &&
          window.scrollY < section.bottom
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    
    // 현재 경로 확인
    const currentPath = window.location.pathname;
    const isMainPage = currentPath === `/${locale}` || currentPath === `/${locale}/`;
    
    // 메인 페이지가 아닌 경우 메인 페이지로 이동 후 스크롤
    if (!isMainPage) {
      window.location.href = `/${locale}#${id}`;
      return;
    }
    
    // 요소를 찾을 때까지 시도 (동적 렌더링 대응)
    const findAndScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Navbar height offset
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: Math.max(0, elementPosition),
          behavior: "smooth",
        });
      } else {
        // 요소를 찾지 못한 경우 약간의 지연 후 재시도
        setTimeout(() => {
          const retryElement = document.getElementById(id);
          if (retryElement) {
            const offset = 80;
            const elementPosition = retryElement.offsetTop - offset;
            window.scrollTo({
              top: Math.max(0, elementPosition),
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };
    
    findAndScroll();
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 transition-colors duration-150 dark:border-slate-800 dark:bg-[#0c1425] ${
        scrolled ? "dark:border-slate-700" : ""
      }`}
    >
      <div className="mx-auto max-w-[1040px] px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={`#hero`}
            onClick={(e) => handleNavClick(e, "hero")}
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Portfolio
          </Link>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-medium transition-all duration-150 ${
                  activeSection === item.id
                    ? "text-black dark:text-white"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                // 달 아이콘 (다크모드일 때)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // 해 아이콘 (라이트모드일 때)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
