import Hero from '@/components/Hero';
import About from '@/components/About';
import SectionDivider from '@/components/SectionDivider';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
