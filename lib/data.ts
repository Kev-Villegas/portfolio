import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import gameHub from '@/public/gamehub.webp';
import { TbBrandPython } from 'react-icons/tb';
import { TbBrandNextjs } from 'react-icons/tb';
import gymDesign from '@/public/gymDesign.webp';
import { IoLogoJavascript } from 'react-icons/io5';
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
    icon: React.createElement(TbBrandPython),
    date: '2020',
  },
  {
    title: 'Web Development Fundamentals',
    description: 'Studied HTML, CSS For Web Development Basics.',
    icon: React.createElement(FaHtml5),
    date: '2021',
  },
  {
    title: 'Introduction to JavaScript and React',
    description:
      'Began learning JavaScript and basics of React. Also learned Git and GitHub.',

    icon: React.createElement(IoLogoJavascript),
    date: '2022',
  },
  {
    title:
      'Advanced Web Development with TypeScript + Zod, Next.js, and Prisma',
    description:
      'Advanced with TypeScript, Next.js, and Prisma. Explored Tailwind CSS and Chakra UI.',
    icon: React.createElement(TbBrandNextjs),
    date: '2023',
  },
  {
    title: 'UX/UI Design With Figma',
    description: 'Learned Figma for UI/UX design and also basics of Wordpress.',
    icon: React.createElement(FaFigma),
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
