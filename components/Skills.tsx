"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

type skillsProps = (typeof skillsData)[number];

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

const Skills = ({ name, image }: skillsProps) => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-[#383d46] text-base text-[#ececec] font-medium borderBlack rounded-xl px-4 font-primary flex text-center justify-center items-center cursor-pointer relative overflow-hidden transition-transform duration-300 transform-gpu"
          >
            <div className="duration-300 p-2 rounded-lg flex items-center focus:scale-110 hover:scale-[1.1] transition-all delay-[0.03s]">
              <Image
                src={skill.image}
                alt={skill.name}
                quality={90}
                className="w-[22px] h-[22px] mr-2 rounded-[4px] cursor-pointer"
              />
              <span>{skill.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
