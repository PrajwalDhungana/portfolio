import React from "react";
import { CiDark } from "react-icons/ci";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const navListVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navLinksVariant = {
    start: {
      y: 0,
      opacity: 0,
    },
    end: {
      y: 0,
      opacity: 1,
    },
  };

  const navLinksTransition = {
    duration: 1,
    ease: "easeInOut",
    delay: 3
  };

  return (
    <header>
      <nav className="flex py-8 px-12 justify-center overflow-hidden items-center font-josefin">

        <div className="flex">
          <motion.ul
            variants={navListVariants}
            initial="start"
            animate="end"
            className="hidden md:flex items-center gap-32"
          >
            <Link href="/about">
              <motion.li
                variants={navLinksVariant}
                transition={navLinksTransition}
                className="py-2 px-4 mx-2 text-charcoal hover:text-red-600  hover:-translate-y-2 cursor-pointer uppercase text-lg"
              >
                About
              </motion.li>
            </Link>
            <div className="flex">
              <motion.div
                initial={{
                  y: 0,
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <Link href="/">
                  <Logo />
                </Link>
              </motion.div>
            </div>
            <Link href="/skills">
              <motion.li
                variants={navLinksVariant}
                transition={navLinksTransition}
                className="py-2 px-4 mx-2 text-charcoal cursor-pointer hover:text-red-600 uppercase text-lg"
              >
                Work
              </motion.li>
            </Link>
          </motion.ul>
        </div>
      </nav>
    </header>
  );
}

const Logo = () => {
   return (
    <svg width="40" height="60" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.1977 14.8315H7.41573C3.32013 14.8315 0 11.5113 0 7.41573C0 3.32014 3.32013 0 7.41573 0H35.6742C49.1089 0 60 10.891 60 24.3258V25.9986C60 38.5096 49.8579 48.6517 37.3469 48.6517H25.368C19.4729 48.6517 14.6939 53.4307 14.6939 59.3258V62.6531C14.6939 66.7107 11.4045 70 7.34694 70C3.28934 70 0 66.7107 0 62.6531V52.3034C0 42.5298 7.92306 34.6067 17.6966 34.6067H36.1977C41.6585 34.6067 46.0853 30.1799 46.0853 24.7191C46.0853 19.2583 41.6585 14.8315 36.1977 14.8315Z" fill="#DC2626"/>
    </svg>
   );
}

{
  /* <header>
<nav className="flex py-3 px-5 justify-between overflow-hidden">
  <div className="flex">
    <motion.div
      initial={{
        x: -300,
        scale: 0.5,
        opacity: 0,
      }}
      animate={{
        x: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Link href="/">
        <h3 className="text-charcoal font-bold text-4xl tracking-wide">
          ::przwl
        </h3>
      </Link>
    </motion.div>
  </div>

  <div className="flex">
    <motion.ul
      variants={navListVariants}
      initial="start"
      animate="end"
      className="hidden md:flex text-md font-semibold"
    >
      <motion.li
        variants={navLinksVariant}
        transition={navLinksTransition}
        className="py-2 px-4 mx-2 text-charcoal cursor-pointer hover:text-deep hover:scale-125"
      >
        <Link href="/about">About Me</Link>
      </motion.li>
      <motion.li
        variants={navLinksVariant}
        transition={navLinksTransition}
        className="py-2 px-4 mx-2 text-charcoal cursor-pointer hover:text-deep"
      >
        <Link href="/skills">Skills</Link>
      </motion.li>
      <motion.li
        variants={navLinksVariant}
        transition={navLinksTransition}
        className="py-2 px-4 mx-2 text-charcoal cursor-pointer hover:text-deep"
      >
        <Link href="/contact">Contact</Link>
      </motion.li>
      <motion.li
        variants={navLinksVariant}
        transition={navLinksTransition}
        whileTap={{ scale: 0.9 }}
        className="py-2 px-4 mx-2 text-deep cursor-pointer hover:bg-slate-200"
      >
        <a href="#">
          <CiDark className="text-2xl h-full" />
        </a>
      </motion.li>
      <motion.li
        variants={navLinksVariant}
        transition={navLinksTransition}
        whileTap={{ scale: 0.9 }}
        className="py-2 px-4 mx-2 border text-deep border-deep cursor-pointer hover:bg-deep hover:text-white"
      >
        <a href="#">Resume</a>
      </motion.li>
    </motion.ul>
  </div>
</nav>
</header> */
}
