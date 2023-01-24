import {
  CoffeescriptTech,
  CPanelTech,
  CPlusPlusTech,
  CSSTech,
  GithubTech,
  HTMLTech,
  JSTech,
  PHPTech,
  PythonTech,
  RubyTech,
  SwiftTech,
  Technology,
  XcodeTech,
} from "./Technologies";

export interface CodeProjectType {
  title: string;
  shortDesc: string;
  longDesc: string;
  technologies: Technology[];
}

const Content = {
  nav: {
    aboutMe: "Me",
    code: "Coding",
    build: "Building",
    learn: "Learning",
    gitHub: "GitHub",
    linkedIn: "LinkedIn",
    resume: "Resume",
  },
  about: {
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  projects: {
    code: {
      dashboard: {
        title: "Dashboard",
        shortDesc:
          'I used the open source dashboard library "Smashing" along with CoffeeScript, Ruby, HTML, SCSS, and Python to create a dashboard for my college apartment. It fetches and displays information from Google Calendar, Discord, news, weather, and more. This runs off of a Raaspberry Pi that displays to a TV in our living room',
        longDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technologies: [
          PythonTech,
          RubyTech,
          HTMLTech,
          CSSTech,
          CoffeescriptTech,
          GithubTech,
        ],
      },
      wordle: {
        title: "Wordle Solver",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        longDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technologies: [PythonTech, GithubTech],
      },
      ledLamp: {
        title: "LEDLamp",
        shortDesc:
          "I coded an extendable C++ library to interact with the Arduino and sensors / lights in a lamp that I built. The lamp is made up of LED lights, a switch, a potentiometer, and an Arduin. The library is documented with comments / examples to allow others to write custom programs for the lamp",
        longDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technologies: [CPlusPlusTech, GithubTech],
      },
      soi: {
        title: "Natick SOI Website",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        longDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technologies: [
          HTMLTech,
          CSSTech,
          JSTech,
          PHPTech,
          CPanelTech,
          GithubTech,
        ],
      },
      getToThings: {
        title: "GetToThings",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        longDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technologies: [SwiftTech, XcodeTech],
      },
    },
    build: {
      salmonLadder: {
        title: "Salmon Ladder",
        shortDesc:
          'I built the American Ninja Warrior obstacle "The Salmon Ladder" in my backyard. I designed it in Fusion360 and analyzed the design using mechanical principles. The structure is over 10 feet tall and fully functional for its designed purpose.',
        longDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technologies: [],
      },
    },
  },
};

export const CodeProjects = Content.projects.code;
export const BuildProjects = Content.projects.build;
export const NavText = Content.nav;
export const AboutText = Content.about;

export default Content;
