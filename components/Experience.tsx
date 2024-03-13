'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/FadeIn';
import Timeline from '@mui/lab/Timeline';
import { experiencesData } from '@/lib/data';
import TimelineDot from '@mui/lab/TimelineDot';
import { useSectionInView } from '@/lib/hooks';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import SectionHeading from '@/components/SectionHeading';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const Experience = () => {
  const { ref } = useSectionInView('Experience', 0.5);
  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My Experience</SectionHeading>
      <Timeline position='alternate'>
        {experiencesData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent className='text-lg mt-[14px] font-secondary font-semibold'>
              <motion.h3
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
              >
                {item.date}
              </motion.h3>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                color='primary'
                className='bg-opacity-100 border-[0.12rem] py-2 px-2 border-white text-2xl text-center justify-center'
              >
                <motion.h3
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item.icon}
                </motion.h3>
              </TimelineDot>

              {index !== experiencesData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.h3
                variants={fadeIn('left', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
                className='font-semibold capitalize !mt-2 text-[#f0fff0]'
              >
                {item.title}
              </motion.h3>
              <motion.p
                variants={fadeIn('left', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
                className='font-normal !mt-[1px] text-[#D3D3D3]'
              >
                {item.description}
              </motion.p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
