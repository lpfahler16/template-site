import Head from "next/head";
import FullStack from "../components/stack/FullStack";

export default function Stack() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <section className="bg-darkest-gray px-10">
          <FullStack />
        </section>
      </main>
    </div>
  );
}
