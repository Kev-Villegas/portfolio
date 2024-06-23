"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./utils/FadeIn";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { AnimatedText } from "./utils/AnimatedText";
const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.div
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div>
        <AnimatedText
          text="Currently pursuing my final year in a Technical Programming Degree, I'm poised to embark on the next phase of my educational journey by 
        pursuing a Bachelor's Degree in Computer Science. My core stack is focused on Next.js with TypeScript and React, aligning with the latest industry standards and best practices. Additionally, I am actively delving into backend development, with aspirations to transition into a Full-Stack Developer. "
          animationSpeed={0.009}
          once={true}
          tag="p"
        />
      </div>
    </motion.div>
  );
};

export default About;
