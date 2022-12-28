import Head from "next/head";

export default function Contact() {

  const handleSubmit = (event: any) => {
    event.preventDefault();
  }

  return (
      <div className="overflow-hidden w-full">
        <div className="flex flex-col h-screen">
          <Head>
            <title>Portfolio - Contact</title>
          </Head>
          <div className="flex flex-col items-center h-full w-[100vw]">
            <h2 className="text-4xl uppercase font-bold mb-5 px-3 py-20 text-charcoal">Contact</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-lg" method="POST">
              <input className="px-5 py-3 border-2 w-80 outline-none focus:border-clay focus:scale-125 text-charcoal" type="text" name="name" placeholder="Name" />
              <input className="px-5 py-3 border-2 w-80 outline-none focus:border-clay focus:scale-125 text-charcoal" type="email" name="email" placeholder="E-mail" />
              <textarea className="px-5 py-3 max-h-96 border-2 w-80 outline-none focus:border-clay focus:scale-125 text-charcoal" name="message" placeholder="Message" />
              <button className="px-5 py-3 w-80 hover:bg-charcoal bg-clay text-white text-xl font-bold" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
  );
}