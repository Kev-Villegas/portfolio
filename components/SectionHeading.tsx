import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/FadeIn';

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.h2
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.3 }}
      className='text-3xl font-medium capitalize mb-8 text-center font-secondary'
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
