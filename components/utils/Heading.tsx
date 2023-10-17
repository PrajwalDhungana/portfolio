import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string,
  classes?: string,
  duration?: number;
  delay?: number;
};

export default function Heading ({ title, classes, duration = 2, delay = 1500 }: Props) {

    return (
      <motion.span
          variants={{
              initial: {
                  y: 400,
                  opacity: 0
              },
              animate: {
                  y: 0,
                  opacity: 1,
                  transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: duration,
                      delay: delay,
                  },
              },
          }}
          initial="initial"
          animate="animate"
      >
        <p className={`${classes}`}>{title}</p>
      </motion.span>
    );
  };
  