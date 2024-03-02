'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profileImg from '@/public/profileImg.webp';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { IoMailUnread } from 'react-icons/io5';

const Hero = () => {
  return (
    <section
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
      id='hero'
    >
      <div className='flex items-center justify-center'>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.15,
            }}
          >
            <Image
              src={profileImg}
              alt='Kev'
              width='192'
              height='192'
              priority={true}
              quality={100}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold font-primary'>Hello, I'm Kevin.</span> I'm a{' '}
        <span className='font-bold font-primary'>Front-End Developer</span> with{' '}
        <span className='font-bold font-primary'>8 Years</span> of experience. I
        enjoy building{' '}
        <span className='italic font-primary'>Modern Websites</span>. My focus
        is{' '}
        <span className='underline font-primary'>
          React & TypeScript (Next.js)
        </span>
        .
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg'
      >
        <Link
          href='#contact'
          className='bg-gray-900 text-[#F8F8FF] font-medium font-secondary px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact Me <IoMailUnread className='opacity-70' size={20} />
        </Link>
        <a
          href={'cv.pdf'}
          className='bg-[#FFFFF0] text-[#101720] opacity-70 font-medium font-secondary px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
          target='_blank'
        >
          CV
          <BsFillPersonLinesFill size={20} />
        </a>
        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/kevin--villegas/'
          target='_blank'
        >
          <FaLinkedin className='rounded-[6px]' size={18} />
        </a>

        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/Kev-Villegas'
          target='_blank'
        >
          <FaGithub size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
