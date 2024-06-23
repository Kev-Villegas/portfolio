"use client";

import { z } from "zod";
import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { ContactFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.75);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);
    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email Sent!");
      reset();
      return;
    }
    // Toast Error
    toast.error("Something went wrong");
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-200 -mt-4">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kevin.villegas1973@gmail.com">
          Kevin.villegas1973@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        onSubmit={handleSubmit(processForm)}
        className="mt-6 flex flex-col text-[#212121]"
      >
        <input
          {...register("name")}
          className="h-14 px-4 mb-2 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          id="name"
          name="name"
          type="text"
          maxLength={500}
          placeholder="Your Name..."
        />
        {errors.name && (
          <p className="text-red-600 pb-2">{errors.name.message}</p>
        )}
        <input
          {...register("email")}
          className="h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          id="name"
          name="email"
          type="email"
          maxLength={500}
          placeholder="Your email..."
        />
        {errors.email && (
          <p className="text-red-600 mt-2">{errors.email.message}</p>
        )}
        <textarea
          {...register("message")}
          className="h-52 my-3 mb-2 rounded-lg borderBlack p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all "
          id="message"
          name="message"
          placeholder="Your message..."
          maxLength={5000}
        />
        {errors.message && (
          <p className="text-red-600 pb-2">{errors.message.message}</p>
        )}
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
