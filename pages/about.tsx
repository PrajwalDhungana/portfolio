import { delay, motion } from "framer-motion";
import Head from "next/head";

export default function About() {
  const textVariant = {
    initial: { y: 500, opacity: 0, scale: 1.25 },
    animate: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <div className="overflow-hidden w-full">
      <div className="flex flex-col h-screen">
        <Head>
          <title>Portfolio - About</title>
        </Head>
        <div className="flex w-full flex-1 flex-col p-5 items-center h-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariant}
            transition={{ delay: 0, duration: 1 }}
            className="text-4xl uppercase font-bold mb-5 px-3 py-20"
          >
            About Me
          </motion.div>
          <motion.div className="flex flex-col max-w-4xl text-2xl gap-7 font-heading">
            <motion.p
              initial="initial"
              animate="animate"
              variants={textVariant}
              transition={{ delay: .1, duration: 1 }}
            >
              <span>Hi there! I&apos;m Prajwal Dhungana</span>, and I am a
              front-end developer with a passion for building beautiful and
              functional websites. With several years of experience under my
              belt, I have developed a strong understanding of front-end
              technologies such as HTML, CSS, and JavaScript, and have worked on
              a wide range of projects, from small landing pages to large
              e-commerce websites.
            </motion.p>

            <motion.p
              initial="initial"
              animate="animate"
              variants={textVariant}
              transition={{ delay: 0.2, duration: 1 }}
            >
              When I&apos;m not coding, you can find me tinkering with new
              technologies, listening to music, or contributing to open-source
              projects. I am always eager to learn and grow as a developer, and
              believe that staying up-to-date with the latest trends and best
              practices is key to success in this field.
            </motion.p>

            <motion.p
              initial="initial"
              animate="animate"
              variants={textVariant}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Thank you for visiting my website! I hope you enjoy learning more
              about me and my work, and please don&apos;t hesitate to get in
              touch if you have any questions or would like to collaborate on a
              project.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
