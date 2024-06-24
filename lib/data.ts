import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import gameHub from "@/public/gameHub.webp";
import { TbBrandPython } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import gymDesign from "@/public/gymDesign.webp";
import css from "@/public/skillsImages/css.webp";
import git from "@/public/skillsImages/git.webp";
import { IoLogoJavascript } from "react-icons/io5";
import html from "@/public/skillsImages/html.webp";
import next from "@/public/skillsImages/next.webp";
import react from "@/public/skillsImages/react.webp";
import figma from "@/public/skillsImages/figma.webp";
import github from "@/public/skillsImages/github.webp";
import chakra from "@/public/skillsImages/chakraui.webp";
import portfolioCover from "@/public/portfolioCover.webp";
import tailwind from "@/public/skillsImages/tailwind.webp";
import javascript from "@/public/skillsImages/javascript.webp";
import typescript from "@/public/skillsImages/typescript.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Python Fundamentals",
    description:
      "First contact with programming. Learned Just The Python Basics And How Programming Works.",
    icon: React.createElement(TbBrandPython),
    date: "2020",
  },
  {
    title: "Web Development Fundamentals",
    description: "Studied HTML, CSS For Web Development Basics.",
    icon: React.createElement(FaHtml5),
    date: "2021",
  },
  {
    title: "Introduction to JavaScript and React",
    description:
      "Began learning JavaScript and basics of React. Also learned Git and GitHub.",

    icon: React.createElement(IoLogoJavascript),
    date: "2022",
  },
  {
    title:
      "Advanced Web Development with TypeScript + Zod, Next.js, and Prisma",
    description:
      "Advanced with TypeScript, Next.js, and Prisma. Explored Tailwind CSS and Chakra UI.",
    icon: React.createElement(TbBrandNextjs),
    date: "2023",
  },
  {
    title: "UX/UI Design With Figma",
    description: "Learned Figma for UI/UX design and also basics of Wordpress.",
    icon: React.createElement(FaFigma),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Video Game Discovery App",
    description:
      "This is a mini-version of the rawg website, a popular video game discovery platform",
    type: "BackEnd",
    tags: ["React & React Query", "Chakra UI", "TypeScript"],
    imageUrl: gameHub,
  },
  {
    title: "Project 2",
    description:
      "This is a mini-version of the rawg website, a popular video game discovery platform",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    type: "FullStack",
    imageUrl: gymDesign,
  },
  {
    title: "Project 3",
    description:
      "This is a mini-version of the rawg website, a popular video game discovery platform",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    type: "FrontEnd",
    imageUrl: portfolioCover,
  },
  {
    title: "Project 4",
    description:
      "This is a mini-version of the rawg website, a popular video game discovery platform",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    type: "FrontEnd",
    imageUrl: portfolioCover,
  },  
] as const;

export const skillsData = [
  {
    name: "HTML5",
    image: html,
  },
  {
    name: "CSS3",
    image: css,
  },
  {
    name: "Chakra UI",
    image: chakra,
  },
  {
    name: "Tailwind CSS",
    image: tailwind,
  },
  {
    name: "JavaScript",
    image: javascript,
  },
  {
    name: "React.js",
    image: react,
  },
  {
    name: "TypeScript",
    image: typescript,
  },
  {
    name: "Next.js",
    image: next,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "GitHub",
    image: github,
  },
  {
    name: "Figma",
    image: figma,
  },
] as const;
