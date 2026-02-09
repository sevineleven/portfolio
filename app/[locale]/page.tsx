import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProgressBar from '@/components/ui/ProgressBar';
import HashScrollHandler from '@/components/ui/HashScrollHandler';
import Hero from '@/components/sections/Hero';
import ProofStrip from '@/components/sections/ProofStrip';
import dynamic from 'next/dynamic';
import { Locale } from '@/i18n';

const Experience = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="min-h-[200px]" />,
});

interface HomeProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  return (
    <>
      <ProgressBar />
      <HashScrollHandler />
      <Navbar locale={locale} />
      <main className="min-h-screen">
        <Hero locale={locale} />
        <ProofStrip locale={locale} />
        <Experience locale={locale} />
        <Skills locale={locale} />
        <Projects locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
