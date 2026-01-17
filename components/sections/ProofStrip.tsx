"use client";

import Container from '../ui/Container';
import { proofStrip } from '@/data/portfolio';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ProofStripProps {
  locale: Locale;
}

export default function ProofStrip({ locale }: ProofStripProps) {
  const t = useTranslations(locale);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div 
      className="border-t py-8"
      style={{
        backgroundColor: mounted && theme === "dark" ? "#0c1425" : "rgba(249, 250, 251, 0.5)",
        borderTopColor: mounted && theme === "dark" ? "rgb(51, 65, 85)" : "rgb(229, 231, 235)",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="text-center">
            <h3 className="mb-2 text-xs font-medium text-gray-600 dark:!text-white">
              Role
            </h3>
            <p className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white">
              {locale === "ko" ? proofStrip.role : locale === "zh" ? proofStrip.roleZh : proofStrip.roleEn}
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-xs font-medium text-gray-600 dark:!text-white">
              Main Stack
            </h3>
            <p className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white">
              {proofStrip.mainStack}
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-xs font-medium text-gray-600 dark:!text-white">
              {t('proofStrip.experience')}
            </h3>
            <p className="text-sm md:text-base font-semibold text-gray-900 dark:!text-white">
              {proofStrip.experience}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
