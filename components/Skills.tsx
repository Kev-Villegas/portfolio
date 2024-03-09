'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 '
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-3 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            className='bg-[#383d46] text-base text-[#ececec] font-medium borderBlack rounded-xl px-4 py-2 font-primary'
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
