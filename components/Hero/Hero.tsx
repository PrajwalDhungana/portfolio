import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const hero = {
  animate: {
    transition: {
      delayChildren: 0.1,
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
      duration: 1,
    },
  },
};

export default function Hero({}: Props) {
  return (
    <div className="flex items-center h-full flex-1 justify-center">
      <div className="p-6 -mt-32">
        <motion.div variants={hero} className="text-center">
          <HeroTitle title={"Prajwal"} />
          <HeroSubTitle
            title={"Versatile React developer crafting seamless and interactive web applications."}
            transition={{ delay: 2 }}
          />
          {/* <div className="overflow-hidden">
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
              <Link href="/about">
                <button className="bg-clay py-5 px-5 hover:bg-charcoal text-white">
                  <span className="text-sm lg:text-xl font-bold">Know More About Me</span>
                </button>
              </Link>
            </motion.div>
          </div> */}
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
    <div className="overflow-hidden text-3xl md:text-5xl lg:text-7xl font-heading mb-5 uppercase font-bold">
      <p className="inline-block mr-6">{`Hi! I'm`}</p>
      <AnimatedLetters title={title} />
    </div>
  );
};

const HeroSubTitle = ({ title, transition }: any) => {
  const [slideUp, setSlideUp] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setSlideUp("slide-up")
    }, 1500)
    return () => {
    }
  }, [slideUp])

  return (
    <div className="overflow-hidden text-lg md:text-xl lg:text-3xl font-istokWeb text-charcoal mb-8 max-w-[650px]">
      {/* <AnimatedLetters title={title} transition={transition} /> */}
      <p className={`sub-title ${slideUp} transition-transform duration-[1.5s]`}>Versatile React developer crafting seamless and</p>
      <p className={`sub-title ${slideUp}  transition-transform duration-[1.5s] delay-200`}> interactive web applications.</p>
    </div>
  );
};
