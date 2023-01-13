import { useEffect, useState } from "react";
import { useStopwatch } from "react-use-precision-timer";
import {
  addLeaderboard,
  LeaderboardPlace,
  showLeaderboard,
} from "./leaderboard";
import { MdLeaderboard } from "react-icons/md";
import Link from "next/link";

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

interface LeaderboardRowProps {
  place: LeaderboardPlace;
  num: number;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({
  place,
  num,
}): JSX.Element => {
  return (
    <div className="border-medium-gray border-t-2 p-3 flex justify-between text-lightest-gray">
      <div>
        {num}. {place.name}
      </div>
      <div>{place.time / 1000}</div>
    </div>
  );
};

interface LeaderboardAddProps {
  time: number;
}

const LeaderboardAdd: React.FC<LeaderboardAddProps> = ({
  time,
}): JSX.Element => {
  const [name, setName] = useState("");
  const [submitted, setSubbmitted] = useState(false);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setSubbmitted(true);
    addLeaderboard({ name: name, time: time });
  };

  const res = submitted ? (
    <p>Done!</p>
  ) : (
    <form onSubmit={(event) => onSubmit(event)}>
      <label>
        <input
          className="bg-darkest-gray border-medium-gray border-[1px] px-2 py-1"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" className="pl-4 cursor-pointer" />
    </form>
  );

  return res;
};

export const Leaderboard = () => {
  const [data, setData] = useState<LeaderboardPlace[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    showLeaderboard(20).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <>Loading...</>;
  if (data) {
    return (
      <div>
        {data.map((place: LeaderboardPlace, index: number) => (
          <LeaderboardRow key={index} place={place} num={index + 1} />
        ))}
      </div>
    );
  }
  return null;
};

const FullStack: React.FC = ({}): JSX.Element => {
  const [activeBall, setActiveBall] = useState(-1);
  const [numCorrect, setNumCorrect] = useState(0);
  const [renderTime, setRenderTime] = useState(new Date().getTime());
  const [showBox, setShowBox] = useState(1);
  const stopwatch = useStopwatch();
  const NUM_NEEDED = 20;

  const props = (num: number) => (num === activeBall ? { active: true } : {});

  useEffect(() => {
    const timeout = setTimeout(() => setRenderTime(new Date().getTime()), 1);
    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    const pickRandom = () => {
      var number = Math.floor(Math.random() * 7);
      while (number === activeBall) {
        number = Math.floor(Math.random() * 7);
      }
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
      if (ball === activeBall) {
        setNumCorrect(numCorrect + 1);
        pickRandom();
      } else {
        restart();
      }
    };

    document.addEventListener("keyup", keyPressed);

    if (numCorrect === NUM_NEEDED) {
      setShowBox(2);
      stopwatch.pause();
      setActiveBall(-1);
      document.removeEventListener("keyup", keyPressed);
    }

    return () => {
      document.removeEventListener("keyup", keyPressed);
    };
  }, [activeBall, numCorrect]);

  return (
    <div className="flex flex-col items-center gap-10 pt-10 relative min-h-screen">
      {showBox === 1 && (
        <div className="fixed m-auto w-1/2 mt-[5vh] bg-dark-gray rounded-md shadow-lg shadow-black text-center p-5 text-lightest-gray">
          <p>Type the number corresponding to the player in the stack.</p>
          <p>How fast can you get to 20 without making a mistake?</p>
          <p>Note: A mistake will reset your progress</p>
          <p className="font-bold pt-4">Press any key to start.</p>
        </div>
      )}
      {showBox === 2 && (
        <div className="fixed m-auto w-1/2 mt-[5vh] bg-dark-gray rounded-md shadow-lg shadow-black px-5 py-12 text-lightest-gray z-10">
          <p className="text-center">Your time</p>
          <p className="font-bold pt-4 text-9xl text-main-red text-center">
            {stopwatch.getElapsedRunningTime() / 1000}
          </p>
          <div className="mx-20 mt-8">
            <div className="pb-8">
              <p className="font-bold pb-4">Add to leaderboard</p>
              <LeaderboardAdd time={stopwatch.getElapsedRunningTime()} />
            </div>
            <Leaderboard />
          </div>
        </div>
      )}
      <div className="absolute top-4 left-4 text-xl text-lightest-gray">
        {stopwatch.getElapsedRunningTime() / 1000}
      </div>
      <div className="absolute top-4 right-4 text-xl text-lightest-gray">
        {"Correct: " + numCorrect}
      </div>
      <Link href={"/leaderboard"}>
        <MdLeaderboard className="absolute bottom-4 right-4 text-lightest-gray text-5xl" />
      </Link>
      <Ball {...props(6)} />
      <Ball {...props(5)} />
      <Ball {...props(4)} />
      <Ball {...props(3)} />
      <Ball {...props(2)} />
      <Ball {...props(1)} className="mr-40 mt-20" />
      <Ball {...props(0)} className="ml-10" disc />
    </div>
  );
};

export default FullStack;
