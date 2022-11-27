import Link from "next/link";

interface CardProps {
  link: string;
  children: any;
}

const Card: React.FC<CardProps> = ({ link, children }): JSX.Element => {
  return (
    <Link
      href={link}
      className="text-center p-10 border rounded-xl border-lightest-gray flex-grow cursor-pointer bg-dark-gray group hover:bg-inherit transition"
    >
      {children}
    </Link>
  );
};

export default Card;
