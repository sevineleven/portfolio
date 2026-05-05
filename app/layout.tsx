import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'sevin.dev',
  description: 'sevin.dev — 박세빈 포트폴리오',
  openGraph: {
    title: 'sevin.dev',
    description: 'sevin.dev — 박세빈 포트폴리오',
    url: 'https://sevin.dev',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
