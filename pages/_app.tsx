import "../styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Loader from "../components/Loader/Loader";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  return (
    <AnimatePresence>
      <div className="overflow-hidden flex flex-col h-screen">
        {loading ? (
          <motion.div key="loader" className="overflow-hidden">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </div>
    </AnimatePresence>
  );
}
