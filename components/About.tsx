'use client';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('About');
    }
  }, [inView, setActiveSection]);

  return (
    <motion.div
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3 font-primary font-light leading-7'>
        Currently pursuing my final year in a{' '}
        <span className='font-semibold'>Technical Programming Degree</span>, I
        am poised to embark on the next phase of my educational journey by
        pursuing a{' '}
        <span className='font-semibold'>
          Bachelor's degree in Computer Science
        </span>
        . With nearly four years of hands-on experience in web development, I
        have honed my skills and expertise in crafting dynamic and responsive
        web applications. My core stack is focused on{' '}
        <span className='font-semibold'>Next.js</span> with{' '}
        <span className='font-semibold'>TypeScript</span> and{' '}
        <span className='font-semibold'>React</span>, aligning with the latest
        industry standards and best practices. Additionally, I am actively
        delving into backend development, with aspirations to transition into a{' '}
        <span className='font-semibold'>Full-Stack Developer</span>.
      </p>
      <p className='font-secondary'>
        <span className='italic'>
          Passionate about continuous learning and personal growth,
        </span>{' '}
        I thrive in challenging environments that foster innovation and
        creativity, constantly seeking to expand my horizons and contribute
        meaningfully to the ever-evolving field of technology.
      </p>
    </motion.div>
  );
};

export default About;
