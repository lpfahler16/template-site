import {
  Menu,
  X,
  Profile,
  Code,
  Build,
  Learn,
  Github,
  LinkedIn,
  Resume,
} from "./Icons";
import { NavText } from "./content";
import { useState } from "react";
import { IconType } from "react-icons";
import Link from "next/link";

interface NavIconProps {
  text: string;
  link: string;
  blank?: boolean;
  Icon: IconType;
}

const NavIcon: React.FC<NavIconProps> = ({
  text,
  link,
  blank = false,
  Icon,
}): JSX.Element => {
  const blankProp = blank ? { target: "_blank" } : {};

  return (
    <Link
      className="text-lightest-gray p-4 group relative"
      href={link}
      {...blankProp}
    >
      <Icon className="inline-bock text-3xl" />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute w-[150%] -bottom-10 py-2 -left-[25%] rounded-md border text-center">
        <p className="font-bold text-lightest-gray">{text}</p>
      </div>
    </Link>
  );
};

export const Nav: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const transition = open ? "" : "translate-x-[calc(100%-40px)]";
  const hideNav = open ? "" : "invisible";
  return (
    <div className={"flex items-center transition " + transition}>
      <div
        className="text-lightest-gray p-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <X className="inline-bock text-3xl hover:scale-125 transition" />
        ) : (
          <Menu className="inline-bock text-3xl hover:scale-125 transition" />
        )}
      </div>
      {true && (
        <span className={"flex items-center " + hideNav}>
          <NavIcon text={NavText.aboutMe} link={"/about"} Icon={Profile} />
          <NavIcon text={NavText.code} link={"/coding"} Icon={Code} />
          <NavIcon text={NavText.build} link={"/building"} Icon={Build} />
          <NavIcon text={NavText.learn} link={"/learning"} Icon={Learn} />
          <div className="border-l-[2px] mx-4 border-lightest-gray h-10"></div>
          <NavIcon
            text={NavText.gitHub}
            link={"https://github.com/lpfahler16"}
            blank
            Icon={Github}
          />
          <NavIcon
            text={NavText.linkedIn}
            link={"https://www.linkedin.com/in/logan-pfahler/"}
            blank
            Icon={LinkedIn}
          />
          <NavIcon text={NavText.resume} link={""} Icon={Resume} />
        </span>
      )}
    </div>
  );
};

const FullNav: React.FC = (): JSX.Element => {
  return (
    <nav className="py-8 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-xl text-lightest-gray">Logan Pfahler</h1>
      </Link>
      <Nav />
    </nav>
  );
};

export default FullNav;
