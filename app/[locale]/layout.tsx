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

export const metadata: Metadata = {
  title: "Portfolio - Sevin Park",
  description: "Backend Developer Portfolio",
  openGraph: {
    title: "Portfolio - Sevin Park",
    description: "Backend Developer Portfolio",
    images: [
      {
        url: "/sevin.jpg",
        width: 1200,
        height: 1200,
        alt: "Sevin Park",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Sevin Park",
    description: "Backend Developer Portfolio",
    images: ["/sevin.jpg"],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

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
