'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const { ref } = useSectionInView('Contact');
  return (
    <section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6 text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:example@gmail.com'>
          example@gmail.com
        </a>
        or through this form.
      </p>
      <form className='mt-5 flex flex-col text-black'>
        <input
          className='h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4b bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <button
          type='submit'
          className='group flex items-center gap-2 h-[3rem] w-[8rem] text-center justify-center text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 bg-white bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65'
        >
          Submit
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </section>
  );
};

export default Contact;
