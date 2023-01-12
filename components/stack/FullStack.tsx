import { useEffect, useState } from "react";
import { useStopwatch } from "react-use-precision-timer";
import { start } from "repl";

interface BallProps {
  active?: boolean;
  disc?: boolean;
  className?: string;
}

const Ball: React.FC<BallProps> = ({
  active = false,
  disc = false,
  className = "",
}): JSX.Element => {
  const color = active ? "bg-main-red" : "bg-lightest-gray";
  const before = disc
    ? "after:border-4 after:border-medium-gray after:right-[-5px] after:bottom-[8px] after:absolute after:w-8 after:-rotate-45 relative"
    : "";

  return (
    <div
      className={["w-12 h-12 rounded-full", className, before, color].join(" ")}
    ></div>
  );
};

const FullStack: React.FC = ({}): JSX.Element => {
  const [activeBall, setActiveBall] = useState(-1);
  const [numCorrect, setNumCorrect] = useState(0);
  const [renderTime, setRenderTime] = useState(new Date().getTime());
  const [showBox, setShowBox] = useState(1);
  const stopwatch = useStopwatch();

  const props = (num: number) => (num === activeBall ? { active: true } : {});

  useEffect(() => {
    const timeout = setTimeout(() => setRenderTime(new Date().getTime()), 1);
    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    console.log("Re-renderd");
    const pickRandom = () => {
      var number = Math.floor(Math.random() * 7);
      while (number === activeBall) {
        number = Math.floor(Math.random() * 7);
      }
      console.log("Random: ", number);
      setActiveBall(number);
    };

    const restart = () => {
      pickRandom();
      stopwatch.start();
      setNumCorrect(0);
    };

    const keyPressed = (event: KeyboardEvent) => {
      setShowBox(0);
      const ball = parseInt(event.key);
      console.log("Pressed: ", ball);
      console.log("Active: ", activeBall);
      if (ball === activeBall) {
        console.log("Correct!");
        setNumCorrect(numCorrect + 1);
        pickRandom();
      } else {
        restart();
      }
    };

    document.addEventListener("keyup", keyPressed);

    if (numCorrect === 20) {
      setShowBox(2);
      stopwatch.pause();
      setActiveBall(-1);
    }

    return () => {
      document.removeEventListener("keyup", keyPressed);
    };
  }, [activeBall, numCorrect]);

  return (
    <div className="flex flex-col items-center gap-10 mt-10 relative">
      {showBox === 1 && (
        <div className="fixed m-auto w-1/2 mt-[5vh] bg-dark-gray rounded-md shadow-lg shadow-black text-center p-5 text-lightest-gray">
          <p>Type the number corresponding to the player in the stack.</p>
          <p>How fast can you get to 20 without making a mistake?</p>
          <p>Note: A mistake will reset your progress</p>
          <p className="font-bold pt-4">Press any key to start.</p>
        </div>
      )}
      {showBox === 2 && (
        <div className="fixed m-auto w-1/2 mt-[5vh] bg-dark-gray rounded-md shadow-lg shadow-black text-center px-5 py-12 text-lightest-gray">
          <p>Your time</p>
          <p className="font-bold pt-4 text-9xl text-main-red">
            {stopwatch.getElapsedRunningTime() / 1000}
          </p>
        </div>
      )}
      <div className="absolute top-4 left-4 text-xl text-lightest-gray">
        {stopwatch.getElapsedRunningTime() / 1000}
      </div>
      <div className="absolute top-4 right-4 text-xl text-lightest-gray">
        {"Correct: " + numCorrect}
      </div>
      <Ball {...props(6)} />
      <Ball {...props(5)} />
      <Ball {...props(4)} />
      <Ball {...props(3)} />
      <Ball {...props(2)} />
      <Ball {...props(1)} className="mr-40" />
      <Ball {...props(0)} className="ml-10" disc />
    </div>
  );
};

export default FullStack;
