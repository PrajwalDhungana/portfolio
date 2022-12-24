import Head from "next/head";

export default function Contact() {
  return (
      <div className="overflow-hidden">
        <div className="flex flex-col h-screen">
          <Head>
            <title>Portfolio - Contact</title>
          </Head>
          <div className="flex flex-col justify-center items-center h-full w-[100vw]">
            <h2 className="text-4xl text-slate-600 font-bold">Contact</h2>
            <form className="flex flex-col" method="POST">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="E-mail" />
              <textarea name="message" placeholder="Message" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
  );
}