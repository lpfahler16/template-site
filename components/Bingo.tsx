import { useState } from "react";

interface IdeaCell {
  idea: String;
}

const IdeaCell: React.FC<IdeaCell> = ({ idea }): JSX.Element => {
  const [clicked, setClicked] = useState(false);

  let classes =
    "border border-medium-gray aspect-square flex justify-center items-center cursor-pointer text-lightest-gray";
  if (clicked) classes += " bg-dark-gray text-main-red";

  return (
    <div className={classes} onClick={() => setClicked(!clicked)}>
      <p className="text-center text-sm font-bold p-4">{idea}</p>
    </div>
  );
};

export const Bingo: React.FC = (): JSX.Element => {
  const ideas = [
    [
      "She shows her work",
      "Character named Martin",
      'That star "bling" sound effect',
      "SANTA",
      "Sitting by the fire",
    ],
    [
      "Longing for non California christmas",
      "Flip phone",
      "Mistletoe Kiss",
      "Cookies",
      "Last minute float disaster",
    ],
    [
      "California Snow",
      "He welds",
      "Kiss",
      "She makes bulldozer pun",
      "Big Al dies",
    ],
    [
      "Sleigh Ride",
      "Fake snow",
      "Royalty free / Public domain christmas music",
      "Big town gathering",
      "Play fighting",
    ],
    [
      "Hot Cocoa",
      "Generic Ugs",
      "Ice skating",
      "Melissa-diagnosed ED",
      "Cliff funds the family business",
    ],
  ];

  const renderedChoices = ideas
    .reduce((acc, curr) => acc.concat(curr))
    .map((idea, index) => <IdeaCell key={index} idea={idea} />);

  return (
    <div className="py-10">
      <div className="grid grid-cols-5 grid-rows-5 max-w-[700px] mx-auto rounded-xl overflow-hidden border-2 border-lightest-gray">
        {renderedChoices}
      </div>
    </div>
  );
};

export default Bingo;
