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
      y: 300,
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
  };

  return (
    <header>
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
            className="flex text-md font-semibold"
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
    </header>
  );
}
