'use client';
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import { experiencesData } from '@/lib/data';
import TimelineDot from '@mui/lab/TimelineDot';
import { useSectionInView } from '@/lib/hooks';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import SectionHeading from '@/components/SectionHeading';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { motion, useScroll, useTransform } from 'framer-motion';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const Experience = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My Experience</SectionHeading>
      <motion.div>
        <Timeline position='alternate'>
          {experiencesData.map((item, index) => (
            <TimelineItem key={index}>
              {item.date && (
                <TimelineOppositeContent className='text-lg mt-[14px] font-secondary font-semibold'>
                  {item.date}
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot
                  color='primary'
                  className='bg-opacity-100 border-[0.12rem] py-2 px-2 border-white text-2xl text-center justify-center'
                >
                  {item.icon}
                </TimelineDot>

                {index !== experiencesData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <h3 className='font-semibold capitalize text-xl text-[#f0fff0]'>
                  {item.title}
                </h3>
                <p className='font-normal !mt-1 text-base text-[#D3D3D3]'>
                  {item.description}
                </p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </section>
  );
};

export default Experience;
