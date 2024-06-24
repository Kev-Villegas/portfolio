"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { fadeIn } from "@/utils/FadeIn";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="max-w-[24rem] border border-black/5 rounded-xl overflow-hidden relative hover:bg-gray-200 transition bg-white/10 hover:bg-white/20">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="relative h-64 w-full p-2"
        >
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={100}
            className="w-full h-full object-cover rounded-xl  transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40"
          />
        </motion.div>

        <div className="p-5 flex flex-col">
          <h3 className="text-2xl font-semibold font-primary text-[#FFFFFF]">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed font-secondary text-[#a2a8d3]">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-gray-300 font-tertiary font-bold text-[#222831] px-4 py-2 text-[0.7rem] uppercase tracking-wider rounded-full cursor-pointer"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
