import Head from "next/head";
import { Leaderboard } from "../components/stack/FullStack";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export default function Stack() {
  return (
    <div>
      <Head>
        <title>Stack</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <section className="bg-darkest-gray px-10 relative">
          <div className="max-w-xl m-auto p-8">
            <Link href={"/stack"}>
              <FaChevronLeft className="absolute top-10 left-10 text-lightest-gray text-4xl" />
            </Link>
            <p className="text-2xl text-lightest-gray py-4">Leaderboard</p>
            <Leaderboard />
          </div>
        </section>
      </main>
    </div>
  );
}
