import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '백엔드 개발자 박세빈',
  description: '백엔드 개발자 박세빈 포트폴리오',
  openGraph: {
    title: '백엔드 개발자 박세빈',
    description: '백엔드 개발자 박세빈 포트폴리오',
    url: 'https://sevin.dev',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
