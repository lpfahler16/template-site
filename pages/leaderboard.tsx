import Head from "next/head";
import { Leaderboard } from "../components/stack/FullStack";

export default function Stack() {
  return (
    <div>
      <Head>
        <title>Stack</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <section className="bg-darkest-gray px-10">
          <div className="max-w-xl m-auto p-8">
            <p className="text-2xl text-lightest-gray py-4">Leaderboard</p>
            <Leaderboard />
          </div>
        </section>
      </main>
    </div>
  );
}
