import React from "react";
import { motion } from "framer-motion";

type Props = {};

const hero = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

export default function Hero({}: Props) {
  return (
    <div className="flex p-5 items-center h-full flex-1">
      <div className="p-6 lg:ml-24 break-words">
        <motion.div variants={hero}>
          <HeroTitle title={"Prajwal Dhungana"} />
          <HeroSubTitle
            title={"Front-End Web Developer"}
            transition={{ delay: 2 }}
          />
          <div className="overflow-hidden">
            <motion.div
              initial={{
                y: -300,
              }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
            >
              <button className="border-2 border-deep charcoal-500 py-7 px-5 h-10 items-center flex hover:bg-deep hover:text-white">
                <span className="text-sm lg:text-xl">Know More About Me</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const AnimatedLetters = ({ title, transition }: any) => {
  return (
    <motion.span
      className="whitespace-pre-wrap"
      variants={hero}
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

const HeroTitle = ({ title }: any) => {
  return (
    <div className="overflow-hidden text-3xl md:text-5xl lg:text-7xl font-heading mb-3 uppercase font-bold">
      <AnimatedLetters title={title} />
    </div>
  );
};

const HeroSubTitle = ({ title, transition }: any) => {
  return (
    <div className="overflow-hidden text-lg md:text-xl lg:text-3xl font-semibold text-charcoal mb-5">
      <AnimatedLetters title={title} transition={transition} />
    </div>
  );
};
