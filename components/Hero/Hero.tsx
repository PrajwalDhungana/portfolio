import React from "react";
import { motion } from "framer-motion";

type Props = {};

const hero = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
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
    <div className="flex p-5 items-center h-full">
      <div className="p-6 ml-24">
        <motion.div variants={hero}>
          <HeroTitle title={"Prajwal Dhungana"} />
          <HeroSubTitle
            title={"Front-End Web Developer"}
            transition={{ delay: 2 }}
          />
          <div className="overflow-hidden">
            <motion.div
              initial={{
                x: -300,
              }}
              animate={{ x: 0 }}
              transition={{
                delay: 2,
                duration: 1,
              }}
            >
              <button className="btn">
                <span className="btn-text">Know More About Me</span>
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
    <div className="overflow-hidden text-7xl font-heading mb-3 uppercase font-bold">
      <AnimatedLetters title={title} />
    </div>
  );
};

const HeroSubTitle = ({ title, transition }: any) => {
  return (
    <div className="overflow-hidden text-3xl font-semibold text-grey mb-5">
      <AnimatedLetters title={title} transition={transition} />
    </div>
  );
};
