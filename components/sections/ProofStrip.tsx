import Container from '../ui/Container';
import { proofStrip } from '@/data/portfolio';
import { Locale } from '@/i18n';
import { useTranslations } from '@/lib/i18n';

interface ProofStripProps {
  locale: Locale;
}

export default function ProofStrip({ locale }: ProofStripProps) {
  const t = useTranslations(locale);

  return (
    <div className="border-y border-gray-200 bg-gray-50/50 py-8 dark:border-slate-800 dark:bg-[#0c1425]">
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
