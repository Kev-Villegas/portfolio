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
              <TimelineOppositeContent className='text-lg mt-3'>
                {item.date}
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot className='text-[#000] rounded-full border-[0.14rem] border-white shadow-xl text-2xl'>
                {item.icon}
              </TimelineDot>

              {index !== experiencesData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
