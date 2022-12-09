import Head from "next/head";
import Header from "../components/Header/Header";

export default function About() {
  return (
      <div className="overflow-hidden">
        <div className="flex flex-col h-screen">
          <Head>
            <title>Portfolio - About</title>
          </Head>

          <Header />

          <div>
            <span className="text-2xl">Hi! I&apos;m Prajwal Dhungana.</span>
          </div>
        </div>
      </div>
  );
}