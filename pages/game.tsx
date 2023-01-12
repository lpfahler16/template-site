import Head from "next/head";
import { AiFillHome } from "react-icons/ai";
import PlayerBox from "../components/game/PlayerBox";
import { useTimer, TimerOptions, Timer } from "react-use-precision-timer";
import * as Player from "../components/game/player";
import IPlayer from "../components/game/player";
import IGame from "../components/game/game";
import * as Game from "../components/game/game";
import { useEffect, useRef } from "react";
import Ball from "../components/game/Ball";

export default function GamePage() {
  const timerSettings = (): TimerOptions => ({
    delay: 180000,
    fireImmediately: false,
    startImmediately: true,
  });

  const timer1 = useTimer(timerSettings());
  const timer2 = useTimer(timerSettings());

  const game: IGame = {
    player1: { timer: timer1, id: "player1" },
    player2: { timer: timer2, id: "player2" },
    prompt: "",
  };

  useEffect(() => {
    Game.recordGameState(game);
  });

  useEffect(() => {
    Game.initGame(game);
  }, []);

  return (
    <div>
      <Head>
        <title>Game</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-scroll">
        <div className="flex flex-col h-screen">
          <PlayerBox className="rotate-180" player={game.player1} />
          <PlayerBox player={game.player2} />
        </div>
        <Ball game={game} z={10}></Ball>
        <HoBox z={15}>
          <div className="w-full flex justify-center bottom-0 fixed">
            <Prompt game={game} />
          </div>
        </HoBox>
        <ClickBox game={game} z={20} />
      </main>
    </div>
  );
}

interface HoBoxProps extends Game.GameProps {
  children?: JSX.Element;
}
const HoBox: React.FC<HoBoxProps> = ({
  children = <></>,
  z = 0,
}): JSX.Element => {
  return (
    <div
      className={[
        "fixed w-[100vh] h-[100vw] left-0 top-[-100vw] origin-bottom-left rotate-90",
        `z-[${z}]`,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

interface ClickBoxProps extends Game.GameProps {
  game: IGame;
}
const ClickBox: React.FC<ClickBoxProps> = ({ game, z = 0 }): JSX.Element => {
  const playerClicked = async () => {
    Game.switchTurns(game);
  };

  return (
    <div
      className={[
        "w-[100vw] h-[100vh] fixed top-0 left-0 cursor-pointer",
        `z-[${z}]`,
      ].join(" ")}
      onMouseDown={playerClicked}
    ></div>
  );
};

interface PromptProps extends Game.GameProps {
  game: IGame;
}
const Prompt: React.FC<PromptProps> = ({ game, z = 0 }): JSX.Element => {
  return (
    <div
      className={["bg-white px-14 py-3 rounded-t-[40px]", `z-[${z}]`].join(" ")}
    >
      {game.prompt}
    </div>
  );
};
