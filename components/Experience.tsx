'use client';
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const Experience = () => {
  const { ref } = useSectionInView('Experience');
  return (
    <section ref={ref} id='experience' className='scroll-mt-28'>
      <SectionHeading>My Experience</SectionHeading>
      <Timeline position='alternate'>
        {experiencesData.map((item, index) => (
          <TimelineItem key={index}>
            {item.date && (
              <TimelineOppositeContent className='text-[#ccc]'>
                {item.date}
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot />
              {index !== experiencesData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <h3 className='font-medium capitalize tracking-wider font-primary text-[#fff] '>
                {item.title}
              </h3>
              <p className='font-normal !mt-2 font-secondary tracking-wide text-[#ccc] '>
                {item.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
