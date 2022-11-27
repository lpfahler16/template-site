import { IconType } from "react-icons";

interface SwitchProps {
  chosen: number;
  choose: (chosen: number) => void;
  choices: IconType[];
}

export const Switch: React.FC<SwitchProps> = ({
  choices,
  chosen,
  choose,
}): JSX.Element => {
  const selectedClasses = "text-main-red text-9xl";
  const unselectedClasses =
    "text-medium-gray text-6xl animate-pulse hover:scale-125 transition";

  const renderedChoices = choices.map((Icon, index) => {
    return (
      <Icon
        key={index}
        className={
          "inline-block cursor-pointer " +
          (index == chosen ? selectedClasses : unselectedClasses)
        }
        onClick={() => choose(index)}
      />
    );
  });

  return (
    <div className="flex justify-center gap-10 items-center py-4">
      {renderedChoices}
    </div>
  );
};

export default Switch;
