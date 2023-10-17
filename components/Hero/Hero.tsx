import React from "react";
import { Variants, motion } from "framer-motion";
import AnimatedLetters from "../utils/AnimatedLetters";
import Heading from "../utils/Heading";

type Props = {
  title?: string;
  classes?: string;
  duration?: number;
  delay?: number;
  letterDelay?: Variants;
};

/**
 * Variant to slide individual alphabet up
 * Every children is staggered with a delay
 *
 * @since 1.0.0
 * @returns object
 */
export const letterDelay = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

/**
 * Variant to slide individual alphabet up
 *
 * @since 1.0.0
 * @returns object
 */
export const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
      delay: 2,
    },
  },
};

export default function Hero({}: Props) {
  return (
    <div className="flex items-center h-full flex-1 justify-center">
      <div className="absolute text-[256px] font-bold opacity-5 left-[47%] top-40 truncate text-clip max-w-[53%]">
        <AnimatedLetters
          title={["IMAGINATION"]}
          letterAnimation={{
            initial: {
              x: -800,
              opacity: 0,
              transition: {
                delay: 1,
              },
            },
            animate: {
              x: 0,
              opacity: 1,
              transition: {
                ease: [0.6, 1, 0.3, 1],
                duration: 2,
                delay: 1,
              },
            },
          }}
        />
      </div>
      <div className="p-6 w-full max-w-[860px]">
        <motion.div variants={letterDelay}>
          <div className="overflow-hidden text-3xl md:text-5xl lg:text-8xl font-heading mb-5 uppercase font-bold">
            <Heading
              title={`Unlocking`}
              classes={`font-normal text-3xl tracking-[1rem] mb-6 ml-1.5`}
              delay={0.5}
            />
            <AnimatedLetters
              title={["IMAGINATION"]}
              letterAnimation={{
                initial: {
                  x: -800,
                  opacity: 0,
                  transition: {
                    delay: 1.15,
                  },
                },
                animate: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    ease: [0.6, 1, 0.3, 1],
                    duration: 2,
                    delay: 1.15,
                  },
                },
              }}
              letterDelay={letterDelay}
            />
            <Heading
              title={`Through`}
              classes={`font-normal text-3xl tracking-[1rem] mb-6 ml-1.5 mt-12 text-end`}
              delay={2}
            />
            <AnimatedLetters
              title={["DESIGN"]}
              classes={`text-end text-red-600`}
              letterAnimation={letterAnimation}
              letterDelay={letterDelay}
            />
          </div>
        </motion.div>
      </div>
      <div className="absolute text-end text-[256px] font-bold opacity-5 right-[57%] bottom-0 truncate text-clip">
        <AnimatedLetters
          title={["IMAGINATION"]}
          letterAnimation={{
            initial: {
              x: -800,
              opacity: 0,
              transition: {
                delay: 0,
              },
            },
            animate: {
              x: 0,
              opacity: 1,
              transition: {
                ease: [0.6, 1, 0.3, 1],
                duration: 2,
                delay: 1,
              },
            },
          }}
          transition={{}}
          classes={``}
        />
      </div>
    </div>
  );
}
