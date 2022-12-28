import Head from "next/head";

export default function Skills() {
  return (
      <div className="overflow-hidden w-full">
        <div className="flex flex-col h-screen">
          <Head>
            <title>Portfolio - Skills</title>
          </Head>
          <div className="w-full p-5 items-center h-full">
            <div className="text-4xl uppercase font-bold mb-5 px-3 py-20 text-charcoal text-center">
              Skills
            </div>
          </div>
        </div>
      </div>
  );
}