import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio — Sevin Park',
  description: 'Backend Developer Portfolio',
  openGraph: {
    title: 'Portfolio — Sevin Park',
    description: 'Backend Developer Portfolio',
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
