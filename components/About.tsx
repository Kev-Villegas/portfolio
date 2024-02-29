'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
const About = () => {
  return (
    <motion.div
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3 font-secondary leading-[30px] '>
        Currently pursuing my final year in a technical programming degree, I am
        poised to embark on the next phase of my educational journey by pursuing
        a Bachelor's degree in Computer Science. With nearly four years of
        hands-on experience in web development, I have honed my skills and
        expertise in crafting dynamic and responsive web applications. My
        current focus revolves around mastering{' '}
        <span className='font-medium'>Next.js</span> with{' '}
        <span className='font-medium'>TypeScript</span> and{' '}
        <span className='font-medium'>React</span>, aligning with the latest
        industry standards and best practices. Additionally, I am actively
        delving into backend development, with aspirations to transition into a
        versatile <span className='font-medium'>Full-Stack Developer</span>.
      </p>

      <p className='font-secondary'>
        <span className='italic'>Beyond the code,</span> I am fueled by a
        passion for continuous learning and personal growth. Whether I'm
        exploring the intricacies of backend technologies or delving into the
        depths of computer science concepts, I thrive in challenging
        environments that foster innovation and creativity. With each new
        endeavor, I strive to expand my horizons and contribute meaningfully to
        the ever-evolving field of technology.
      </p>
    </motion.div>
  );
};

export default About;
