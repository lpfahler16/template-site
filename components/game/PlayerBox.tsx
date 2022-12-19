import { TimerResult } from "react-timer-hook";
import { Player } from "../../pages/game";

interface PlayerBoxProps {
  className?: string;
  player: Player;
  playerClicked: (player: number) => void;
  index: number; // Player number
}

const PlayerBox: React.FC<PlayerBoxProps> = ({
  className = "",
  player,
  playerClicked,
  index,
}): JSX.Element => {
  const buttonColor = player.timer.isRunning ? "bg-main-red" : "";

  return (
    <button
      onClick={() => playerClicked(index)}
      className={
        "flex justify-center items-center flex-grow " +
        className +
        " " +
        buttonColor
      }
    >
      <p className="text-7xl text-white w-full">
        {player.timer.minutes}:{player.timer.seconds}
      </p>
    </button>
  );
};

export default PlayerBox;
