import Head from "next/head";
import Link from "next/link";

export default function Page2() {
  return (
    <div>
      <Head>
        <title>Logan Pfahler</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden flex flex-col justify-center items-center">
        <p className="text-lightest-gray">Here is page 2</p>
        <Link href={"/"} className="text-main-red">
          Here is page 1
        </Link>
      </main>
    </div>
  );
}
