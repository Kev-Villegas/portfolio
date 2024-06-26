'use client';
import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { links } from '@/lib/data';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-b-lg border border-white border-opacity-40 bg-slate-900 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] text-gray-300 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className='h-3/4 flex items-center justify-center relative font-semibold'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  'flex w-full items-center justify-center px-4 py-3 hover:text-gray-300 transition',
                  {
                    'text-gray-950': activeSection === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                    className='bg-slate-400 rounded-full absolute inset-0 -z-10'
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
