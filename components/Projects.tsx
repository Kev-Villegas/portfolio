import React from 'react';
import Image from 'next/image';
import Project from './Project';
import { projectsData } from '@/lib/data';
import SectionHeading from './SectionHeading';

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
