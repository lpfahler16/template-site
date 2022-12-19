import Head from "next/head";
import { AboutText } from "../components/content";
import Footer from "../components/Footer";
import Nav from "../components/FullNav";

const words = [
  { text: "Hello", value: 4 },
  { text: "Hello", value: 4 },
  { text: "Intelligent", value: 5 },
  { text: "Problem Solver", value: 4 },
  { text: "Hard working", value: 5 },
];

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <section className="bg-darkest-gray px-10">
          <Nav />
          <h2 className="title-lg text-lightest-gray pb-5 md:pl-20 md:p-10">
            Who am I<span className="text-main-red">?</span>
          </h2>
          <div className="flex">
            <div className="text-lightest-gray md:border md:rounded-xl md:border-lightest-gray md:p-10">
              <p className="pb-5">{AboutText.longDesc}</p>
            </div>
          </div>
        </section>
        <section className="bg-darkest-gray px-10">
          <Footer />
        </section>
      </main>
    </div>
  );
}
