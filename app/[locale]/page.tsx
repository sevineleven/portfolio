import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProgressBar from '@/components/ui/ProgressBar';
import BackToTop from '@/components/ui/BackToTop';
import HashScrollHandler from '@/components/ui/HashScrollHandler';
import Hero from '@/components/sections/Hero';
import ProofStrip from '@/components/sections/ProofStrip';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
// TODO: 블로그 사이트 개발 후 연동
// import Writing from '@/components/sections/Writing';
import Contact from '@/components/sections/Contact';
import { Locale } from '@/i18n';

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
        {/* TODO: 블로그 사이트 개발 후 연동 */}
        {/* <Writing /> */}
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      <BackToTop />
    </>
  );
}
