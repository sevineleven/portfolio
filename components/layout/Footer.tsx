import Container from "../ui/Container";
import { personalInfo } from "@/data/portfolio";
import { Locale } from "@/i18n";
import { useTranslations } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-6 md:py-8 dark:border-slate-800 dark:bg-transparent">
      <Container>
        <div className="text-center space-y-2">
          <div className="text-sm text-gray-600 dark:text-white">
            © {currentYear} {personalInfo.nameEn}.{" "}
            {t("footer.rights") || "All rights reserved."}
          </div>
          <div className="text-xs text-gray-400 dark:text-gray-500">
            {t("footer.browserOptimization") || "This site is optimized for PC Chrome and Safari browsers."}
          </div>
        </div>
      </Container>
    </footer>
  );
}
