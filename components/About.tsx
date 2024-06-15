"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./utils/FadeIn";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
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
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="mb-2 font-primary font-light leading-7">
          Currently pursuing my final year in a{" "}
          <span className="font-semibold">Technical Programming Degree</span>, I
          am poised to embark on the next phase of my educational journey by
          pursuing a{" "}
          <span className="font-semibold">
            Bachelor's degree in Computer Science.
          </span>
          My core stack is focused on{" "}
          <span className="font-semibold">Next.js</span> with{" "}
          <span className="font-semibold">TypeScript</span> and{" "}
          <span className="font-semibold">React</span>, aligning with the latest
          industry standards and best practices. Additionally, I am actively
          delving into backend development, with aspirations to transition into
          a <span className="font-semibold">Full-Stack Developer</span>.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
