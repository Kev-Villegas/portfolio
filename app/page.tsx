import Hero from '@/components/Hero';
import About from '@/components/About';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Hero />
      <SectionDivider />
      <About />
    </main>
  );
}
