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
    title: 'Python Fundamentals',
    description:
      'First contact with programming. Learned Just The Python Basics And How Programming Works.',
    date: '2020',
  },
  {
    title: 'Web Development Fundamentals',
    description: 'Studied HTML, CSS For Web Development Basics.',
    date: '2021',
  },
  {
    title: 'Introduction to JavaScript and React',
    description:
      'Began learning JavaScript and basics of React. Also learned Git and GitHub.',
    date: '2022',
  },
  {
    title: 'Advanced Web Development with TypeScript, Next.js, and Prisma',
    description:
      'Advanced with TypeScript, Next.js, and Prisma. Explored Tailwind CSS and Chakra UI.',
    date: '2023',
  },
  {
    title: 'UX/UI Design With Figma',
    description:
      'Learned Figma for UI/UX design and WordPress for content management.',
    date: '2024',
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
  'Chakra UI',
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
