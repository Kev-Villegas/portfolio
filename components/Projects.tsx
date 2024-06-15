"use client";
import Project from "./Project";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const [projectType, setProjectType] = useState<string | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (projectType === null) {
      return true; // Mostrar todos los proyectos si no hay filtro
    }
    return project.type === projectType;
  });

  const handleFilterClick = (type: string) => {
    setProjectType(type);
  };

  const handleShowAllClick = () => {
    setProjectType(null); // Mostrar todos los proyectos
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      {/* <motion.div className='flex flex-row gap-2 mb-4 justify-start'>
        <button
          type='button'
          className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
          onClick={handleShowAllClick}
        >
          All
        </button>
        <button
          type='button'
          onClick={() => handleFilterClick('FrontEnd')}
          className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Front-End
        </button>

        <button
          type='button'
          onClick={() => handleFilterClick('BackEnd')}
          className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Back-End
        </button>

        <button
          type='button'
          onClick={() => handleFilterClick('FullStack')}
          className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Full-Stack
        </button>
      </motion.div> */}
      <div>
        {filteredProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
