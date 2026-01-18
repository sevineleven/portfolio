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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMainPage, setIsMainPage] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 메인 페이지인지 확인
    const currentPath = window.location.pathname;
    setIsMainPage(
      currentPath === `/${locale}` ||
        currentPath === `/${locale}/` ||
        currentPath === "/"
    );
    
  }, [locale]);
  
  const handleThemeToggle = () => {
    // 시스템 설정과 관계없이 항상 테마 변경 가능
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const navItems = useMemo(
    () => [
      { id: "hero", label: t("nav.about") || "About" },
      { id: "experience", label: t("nav.experience") || "Experience" },
      { id: "skills", label: t("nav.skills") || "Skills" },
      { id: "projects", label: t("nav.projects") || "Projects" },
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // 메인 페이지인지 확인
      const currentPath = window.location.pathname;
      const isMainPage = 
        currentPath === `/${locale}` ||
        currentPath === `/${locale}/` ||
        currentPath === "/";

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
        
        // 메인 페이지일 때만 URL 해시 업데이트
        if (isMainPage) {
          const newHash = `#${current.id}`;
          // 현재 해시와 다를 때만 업데이트 (무한 루프 방지)
          if (window.location.hash !== newHash) {
            // history.replaceState를 사용하여 페이지 리로드 없이 URL 업데이트
            window.history.replaceState(
              null,
              "",
              `/${locale}${newHash}`
            );
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, locale]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    
    // 모바일 메뉴 닫기
    setMobileMenuOpen(false);
    
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
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-sm transition-colors duration-150 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        backgroundColor: mounted && theme === "dark" ? "#0c1425" : mounted && theme === "light" ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.95)",
        borderColor: mounted && theme === "dark" ? "rgb(51, 65, 85)" : "rgb(229, 231, 235)",
      }}
    >
      <div className="mx-auto max-w-[1040px] px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={`#hero`}
            onClick={(e) => handleNavClick(e, "hero")}
            className="text-lg font-semibold"
            style={{
              color: !mounted ? "#111827" : (theme === "dark" ? "#ffffff" : "#111827"),
            }}
          >
            Portfolio
          </Link>
          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm transition-all duration-150"
                style={{
                  color: !mounted 
                    ? (activeSection === item.id ? "#000000" : "#4b5563")
                    : (theme === "dark" 
                      ? "#ffffff" 
                      : activeSection === item.id 
                        ? "#000000" 
                        : "#4b5563"),
                  fontWeight: activeSection === item.id ? "600" : "500",
                }}
                onMouseEnter={(e) => {
                  if (mounted && theme !== "dark" && activeSection !== item.id) {
                    e.currentTarget.style.color = "#111827";
                  }
                }}
                onMouseLeave={(e) => {
                  if (mounted && theme !== "dark" && activeSection !== item.id) {
                    e.currentTarget.style.color = "#4b5563";
                  } else if (mounted && theme === "dark") {
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleThemeToggle}
              className="rounded-md p-2 transition-colors"
              style={{
                color: !mounted ? "#4b5563" : (theme === "dark" ? "#ffffff" : "#4b5563"),
              }}
              onMouseEnter={(e) => {
                if (mounted && theme === "dark") {
                  e.currentTarget.style.backgroundColor = "rgb(51, 65, 85)";
                } else if (mounted) {
                  e.currentTarget.style.backgroundColor = "rgb(243, 244, 246)";
                  e.currentTarget.style.color = "#111827";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = mounted && theme === "dark" ? "#ffffff" : "#4b5563";
              }}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                // 달 아이콘 (다크모드일 때)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  style={{
                    color: "#ffffff",
                  }}
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

          {/* 모바일: 햄버거 버튼 및 테마 토글 */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleThemeToggle}
              className="rounded-md p-2 transition-colors"
              style={{
                color: !mounted ? "#4b5563" : (theme === "dark" ? "#ffffff" : "#4b5563"),
              }}
              onMouseEnter={(e) => {
                if (mounted && theme === "dark") {
                  e.currentTarget.style.backgroundColor = "rgb(51, 65, 85)";
                } else if (mounted) {
                  e.currentTarget.style.backgroundColor = "rgb(243, 244, 246)";
                  e.currentTarget.style.color = "#111827";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = mounted && theme === "dark" ? "#ffffff" : "#4b5563";
              }}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 transition-colors"
              style={{
                color: !mounted ? "#4b5563" : (theme === "dark" ? "#ffffff" : "#4b5563"),
              }}
              onMouseEnter={(e) => {
                if (mounted && theme === "dark") {
                  e.currentTarget.style.backgroundColor = "rgb(51, 65, 85)";
                } else if (mounted) {
                  e.currentTarget.style.backgroundColor = "rgb(243, 244, 246)";
                  e.currentTarget.style.color = "#111827";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = mounted && theme === "dark" ? "#ffffff" : "#4b5563";
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                // X 아이콘 (메뉴가 열렸을 때)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                // 햄버거 아이콘 (메뉴가 닫혔을 때)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden border-t py-4"
            style={{
              borderColor: mounted && theme === "dark" ? "rgb(51, 65, 85)" : "rgb(229, 231, 235)",
            }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="px-2 py-2 text-sm transition-all duration-150 rounded-md"
                  style={{
                    color: !mounted 
                      ? (activeSection === item.id ? "#000000" : "#4b5563")
                      : (theme === "dark" ? "#ffffff" : (activeSection === item.id ? "#000000" : "#4b5563")),
                    backgroundColor: mounted && theme === "dark" 
                      ? (activeSection === item.id ? "rgb(30, 41, 59)" : "transparent")
                      : (activeSection === item.id ? "rgb(243, 244, 246)" : "transparent"),
                    fontWeight: activeSection === item.id ? "600" : "500",
                  }}
                  onMouseEnter={(e) => {
                    if (mounted && theme === "dark") {
                      e.currentTarget.style.backgroundColor = "rgb(30, 41, 59)";
                    } else if (mounted) {
                      e.currentTarget.style.backgroundColor = "rgb(249, 250, 251)";
                      e.currentTarget.style.color = "#111827";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (mounted && theme === "dark") {
                      e.currentTarget.style.backgroundColor = activeSection === item.id ? "rgb(30, 41, 59)" : "transparent";
                      e.currentTarget.style.color = "#ffffff";
                    } else if (mounted) {
                      e.currentTarget.style.backgroundColor = activeSection === item.id ? "rgb(243, 244, 246)" : "transparent";
                      e.currentTarget.style.color = activeSection === item.id ? "#000000" : "#4b5563";
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
