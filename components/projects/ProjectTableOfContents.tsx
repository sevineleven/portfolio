"use client";

import { useEffect, useState, useRef } from "react";
import { Locale } from "@/i18n";

interface Section {
  id: string;
  label: string;
}

interface ProjectTableOfContentsProps {
  sections: Section[];
  locale: Locale;
}

export default function ProjectTableOfContents({
  sections,
  locale,
}: ProjectTableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionPositionsRef = useRef<Array<{ id: string; top: number }>>([]);
  const lastActiveSectionRef = useRef<string>("");

  // Cache section positions - only recalculate when sections change or on resize
  const updateSectionPositions = () => {
    sectionPositionsRef.current = sections
      .map((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          return {
            id: section.id,
            top: element.offsetTop,
          };
        }
        return null;
      })
      .filter(Boolean) as Array<{ id: string; top: number }>;
  };

  useEffect(() => {
    // Initial calculation with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      updateSectionPositions();
      if (sectionPositionsRef.current.length > 0) {
        const initialSection = sectionPositionsRef.current[0]?.id || sections[0]?.id || "";
        setActiveSection(initialSection);
        lastActiveSectionRef.current = initialSection;
      }
    }, 100);

    // Recalculate on window resize
    const handleResize = () => {
      updateSectionPositions();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for navbar

      const sectionPositions = sectionPositionsRef.current;
      if (sectionPositions.length === 0) {
        return;
      }

      // Find the last section that we've scrolled past
      let currentSection = sections[0]?.id || "";

      // Check from bottom to top to find the last section we've passed
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const pos = sectionPositions[i];
        // If we've scrolled past this section's top, this is our active section
        if (scrollPosition >= pos.top - 50) {
          currentSection = pos.id;
          break;
        }
      }

      // Only update state if the section actually changed
      if (currentSection !== lastActiveSectionRef.current) {
        lastActiveSectionRef.current = currentSection;
        setActiveSection(currentSection);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Navbar height offset
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: "smooth",
      });
    }
  };

  if (sections.length === 0) {
    return null;
  }

  return (
    <div className="space-y-1">
      <h3 className="project-sidebar-title text-xs md:text-sm font-semibold mb-3 md:mb-4">
        {locale === "ko"
          ? "목차"
          : locale === "zh"
          ? "目录"
          : "Table of Contents"}
      </h3>
      <nav className="space-y-1">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`block py-1.5 px-2 rounded-md transition-all duration-300 text-[10px] md:text-xs ${
                isActive
                  ? "project-toc-active font-semibold"
                  : "project-toc-inactive hover:project-toc-hover"
              }`}
              style={
                !isActive
                  ? { borderLeft: "3px solid transparent" }
                  : undefined
              }
            >
              {section.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
