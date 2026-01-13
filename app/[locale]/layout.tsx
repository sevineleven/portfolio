import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Locale } from "@/i18n";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 절대 URL을 위한 base URL 생성
function getBaseUrl() {
  // 프로덕션에서는 환경 변수나 도메인 사용, 로컬에서는 localhost
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // 기본값 (도메인 연결 후 자동으로 Vercel이 설정)
  return "https://sevin.dev";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = getBaseUrl();
  // 절대 URL로 이미지 경로 생성 (프로토콜 포함, 명시적으로 문자열로)
  const ogImageUrl = `${baseUrl}/portfolio_thumbnail.png`;
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "Portfolio - Sevin Park",
    description: "Backend Developer Portfolio",
    openGraph: {
      title: "Portfolio - Sevin Park",
      description: "Backend Developer Portfolio",
      url: currentUrl,
      siteName: "Portfolio - Sevin Park",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 1200,
          alt: "Sevin Park",
          type: "image/png",
        },
      ],
      type: "website",
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
    },
    twitter: {
      card: "summary_large_image",
      title: "Portfolio - Sevin Park",
      description: "Backend Developer Portfolio",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 1200,
          alt: "Sevin Park",
        },
      ],
    },
    other: {
      "mobile-web-app-capable": "yes",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  // Mobile Safari 최적화
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1425" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <LanguageSwitcher />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
