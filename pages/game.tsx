import Head from "next/head";
import { AiFillHome } from "react-icons/ai";
import PlayerBox from "../components/game/PlayerBox";

export default function Coding() {
  return (
    <div>
      <Head>
        <title>Game</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <div className="flex flex-col h-screen">
          <PlayerBox className="rotate-180" />
          <div className="h-20 bg-white flex justify-center items-center gap-8">
            <div className="border border-black rounded-full py-2 px-4">
              Hold to Pause
            </div>
            <AiFillHome className="text-3xl" />
          </div>
          <PlayerBox />
        </div>
      </main>
    </div>
  );
}
