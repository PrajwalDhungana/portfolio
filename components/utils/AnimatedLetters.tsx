import React, { useState, useEffect } from "react";
import { Variants, motion } from "framer-motion";

type Props = {
  title: Array<string>,
  transition?: object,
  classes?: string,
  letterAnimation?: Variants
  letterDelay?: Variants
};

export default function AnimatedLetters({ title, classes, transition, letterAnimation, letterDelay }: Props) {
  return (
    <motion.span
      className={`whitespace-pre-wrap block ${classes}`}
      variants={letterDelay}
      initial="initial"
      animate="animate"
      transition={transition}
    >
      {[...title].map((letter) => (
        <motion.span
          className="inline-block"
          variants={letterAnimation}
          key={Math.random()}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
