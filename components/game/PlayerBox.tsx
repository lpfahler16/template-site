interface PlayerBoxProps {
  className?: string;
}

const PlayerBox: React.FC<PlayerBoxProps> = ({
  className = "",
}): JSX.Element => {
  return (
    <div className={"flex justify-center items-center flex-grow " + className}>
      <p className="text-7xl text-white">3:00</p>
    </div>
  );
};

export default PlayerBox;
