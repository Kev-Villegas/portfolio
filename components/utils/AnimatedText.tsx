"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export type AnimatedTextProps = {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  animationSpeed?: number;
};

export const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  tag: Wrapper = "p",
  className,
  once = true,
  animationSpeed = 0.03, // Valor por defecto para la velocidad de la animación
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once });

  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: animationSpeed }} // Usar la prop para la velocidad de la animación
        aria-hidden
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={defaultAnimations}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
