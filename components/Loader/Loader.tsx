import React, { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  setLoading: Function;
};

export default function Loader({ setLoading }: Props) {
  const loadingCircle = {
    display: "block",
    width: "0.5rem",
    height: "0.5rem",
    backgroundColor: "black",
    borderRadius: "50%",
    margin: "2px",
  };

  const loadingContainerVariant = {
    start: {
      x: -200,
      opacity: 0,
      scale: 0.5,
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      x: 0,
      opacity: 1,
      scale: 2,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const loadingCircleVariant = {
    start: {
      y: -10,
    },
    end: {
      y: 0,
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: 5,
    ease: "easeInOut",
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <motion.div
        variants={loadingContainerVariant}
        initial="start"
        animate="end"
        className="flex justify-around"
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariant}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariant}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariant}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </div>
  );
}
