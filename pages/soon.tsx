import Head from "next/head";
import Nav from "../components/FullNav";

export default function Soon() {
  return (
    <div>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <section className="bg-darkest-gray px-10">
          <Nav />
        </section>
        <section className="bg-darkest-gray px-10">
          <div className="flex flex-col justify-between md:flex-row md:items-center gap-4 pb-4">
            <h2 className="title-lg py-2 text-lightest-gray">Coming Soon...</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
