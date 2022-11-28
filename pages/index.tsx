import {motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Loader from "../components/Loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'><Loader setLoading={setLoading} /></motion.div>
      ) : (
        <div className="flex flex-col h-screen">
          <Head>
            <title>Portfolio - Prajwal Dhungana</title>
          </Head>

          {/* Header */}
          <Header />

          {/* Hero */}
          <Hero />
        </div>
      )}
    </AnimatePresence>
  );
}
