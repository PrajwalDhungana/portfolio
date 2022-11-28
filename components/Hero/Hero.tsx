import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="flex p-5 items-center h-full">
      <div className="p-6 ml-24">
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            delay: 0.6,
          }}
          className="text-6xl text-deep font-extrabold mb-2 font-heading uppercase tracking-wide overflow-hidden"
        >
          Prajwal Dhungana
        </motion.div>
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            delay: 0.7,
          }}
          className="text-2xl font-bold text-grey mb-5"
        >
          Front-End Web Developer
        </motion.div>
        <motion.button
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1
            }
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
          className="btn"
        >
          <span className="btn-text">Know More About Me</span>
        </motion.button>
      </div>
    </div>
  );
}
