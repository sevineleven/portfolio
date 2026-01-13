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
  // 개발 환경에서는 localhost 사용
  if (process.env.NODE_ENV === 'development') {
    return process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';
  }
  // 프로덕션에서는 무조건 실제 도메인 사용 (카카오톡 등 소셜 미디어는 실제 도메인 필요)
  // NEXT_PUBLIC_SITE_URL이 설정되어 있으면 사용, 아니면 기본 도메인
  return process.env.NEXT_PUBLIC_SITE_URL || "https://sevin.dev";
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

  // 이미지 URL을 명시적으로 절대 URL로 설정 (카카오톡 크롤링 대응)
  const absoluteImageUrl = ogImageUrl.startsWith('http') 
    ? ogImageUrl 
    : `${baseUrl}${ogImageUrl.startsWith('/') ? '' : '/'}${ogImageUrl}`;

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
        absoluteImageUrl, // 카카오톡 호환을 위해 문자열 형식으로
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
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
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: "Sevin Park",
        },
      ],
    },
    other: {
      "mobile-web-app-capable": "yes",
      // 카카오톡 호환을 위한 명시적 Open Graph 메타 태그
      "og:url": currentUrl,
      "og:site_name": "Portfolio - Sevin Park",
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": "image/png",
    },
    // 카카오톡 호환을 위한 추가 메타데이터
    alternates: {
      canonical: currentUrl,
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
  const baseUrl = getBaseUrl();
  const ogImageUrl = `${baseUrl}/portfolio_thumbnail.png`;
  const currentUrl = `${baseUrl}/${locale}`;

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
