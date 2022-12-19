import Head from "next/head";
import { AiFillHome } from "react-icons/ai";
import PlayerBox from "../components/game/PlayerBox";
import { TimerResult, useTimer } from "react-timer-hook";

export interface Player {
  timer: TimerResult;
}

export default function Game() {
  const withTimerLength = (length: number) => {
    var d = new Date();
    d.setSeconds(d.getSeconds() + length);
    return d;
  };

  const timerSettings = () => ({
    expiryTimestamp: withTimerLength(180),
    autoStart: false,
  });
  const timer1 = useTimer(timerSettings());
  const timer2 = useTimer(timerSettings());

  const players: Player[] = [{ timer: timer1 }, { timer: timer2 }];

  const playerClicked = async (player: number) => {
    const clicker = players[player];
    const other = players[(player + 1) % 2];
    clicker.timer.pause();
    other.timer.resume();
  };

  return (
    <div>
      <Head>
        <title>Game</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <div className="flex flex-col h-screen">
          <PlayerBox
            index={0}
            className="rotate-180"
            player={players[0]}
            playerClicked={playerClicked}
          />
          <div className="h-20 bg-white flex justify-center items-center gap-8">
            {/* <div className="border border-black rounded-full py-2 px-4">
              Hold to Pause
            </div>
            <AiFillHome className="text-3xl" /> */}
          </div>
          <PlayerBox
            index={1}
            player={players[1]}
            playerClicked={playerClicked}
          />
        </div>
      </main>
    </div>
  );
}
