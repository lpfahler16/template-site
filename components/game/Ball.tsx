import { useEffect } from "react";
import IGame, { GameProps } from "./game";
import * as Player from "./player";

interface BallProps extends GameProps {
  game: IGame;
}

const Ball: React.FC<BallProps> = ({ game, z = 0 }): JSX.Element => {
  const ballSize = 30;
  var ballY = 50;
  const yPos = Player.active(game.player1)
    ? "translate-y-[calc(25vh-14px)]"
    : "translate-y-[calc(75vh-14px)]";

  useEffect(() => {
    // ballY = (window.innerHeight - ballSize) / 2;
  });

  return (
    <div
      className={[
        "top-0 left-0 w-7 h-7 absolute bg-main-red rounded-full transform translate-x-[calc(50vw-14px)] transition-all",
        yPos,
        `z-[${z}]`,
      ].join(" ")}
    ></div>
  );
};

export default Ball;
