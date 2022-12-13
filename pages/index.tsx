import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden w-full">
      <div className="h-full">
        <Head>
          <title>Portfolio - Prajwal Dhungana</title>
        </Head>

        {/* Hero */}
        <Hero />
      </div>
    </div>
  );
}
