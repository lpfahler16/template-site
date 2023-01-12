import { useEffect, useState } from "react";
import * as Player from "./player";
import IPlayer from "./player";
import { getYoutubeLikeToDisplay } from "./helpers";
import { GameProps } from "./game";

interface PlayerBoxProps extends GameProps {
  className?: string;
  player: IPlayer;
}

const PlayerBox: React.FC<PlayerBoxProps> = ({
  className = "",
  player,
  z = 0,
}): JSX.Element => {
  const buttonColor = ""; // player.timer.isRunning() ? "bg-main-red" : "";
  const fontClass = Player.active(player) ? "font-bold" : "";
  const [, setRenderTime] = useState(new Date().getTime());

  useEffect(() => {
    const timeout = setTimeout(() => setRenderTime(new Date().getTime()), 10);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div
      className={[
        "flex justify-center items-end flex-grow text-center",
        className,
        buttonColor,
        `z-[${z}px]`,
      ].join(" ")}
    >
      <p
        className={
          "text-5xl text-white w-full pb-3 transition-all " + fontClass
        }
      >
        {getYoutubeLikeToDisplay(player.timer.getRemainingTime())}
      </p>
    </div>
  );
};

export default PlayerBox;
