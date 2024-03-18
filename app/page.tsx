import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
