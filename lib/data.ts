import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import gameHub from '@/public/gamehub.webp';
import gymDesign from '@/public/gymDesign.webp';
import portfolioCover from '@/public/portfolioCover.webp';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Córdoba - Argentina',
    description: 'Text 1',
    icon: React.createElement(LuGraduationCap),
    date: 'Year - Year',
  },
  {
    title: 'Front-End Developer',
    location: 'Córdoba - Argentina',
    description: 'Text 2',
    icon: React.createElement(CgWorkAlt),
    date: 'Year - Year',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Córdoba - Argentina',
    description: 'Text 3',
    icon: React.createElement(FaReact),
    date: '2022 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'Video Game Discovery App',
    description:
      'This is a mini-version of the rawg website, a popular video game discovery platform',
    tags: ['React & React Query', 'Chakra UI', 'TypeScript'],
    imageUrl: gameHub,
  },
  {
    title: 'Project 2',
    description: 'Project Description',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: gymDesign,
  },
  {
    title: 'Project 3',
    description: 'Project Description',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: portfolioCover,
  },
] as const;

export const skillsData = [
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Material UI',
  'Bootstrap',
  'Framer Motion',
  'JavaScript ES6+',
  'React.js',
  'TypeScript',
  'Next.js',
  'Prisma',
  'Git',
  'GitHub',
] as const;
