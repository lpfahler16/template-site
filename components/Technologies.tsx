import { IconType } from "react-icons";
import {
  C,
  Coffeescript,
  CPanel,
  CPlusPlus,
  CSS,
  Github,
  HTML,
  JS,
  PHP,
  Python,
  Ruby,
  Swift,
} from "./Icons";

export interface Technology {
  name: string;
  icon: IconType;
}

export const GithubTech: Technology = { name: "GitHub", icon: Github };
export const PythonTech: Technology = { name: "Python", icon: Python };
export const CTech: Technology = { name: "C", icon: C };
export const CPlusPlusTech: Technology = { name: "C++", icon: CPlusPlus };
export const HTMLTech: Technology = { name: "HTML", icon: HTML };
export const CSSTech: Technology = { name: "CSS", icon: CSS };
export const JSTech: Technology = { name: "Javascript", icon: JS };
export const PHPTech: Technology = { name: "PHP", icon: PHP };
export const RubyTech: Technology = { name: "Ruby", icon: Ruby };
export const CoffeescriptTech: Technology = {
  name: "Coffeescript",
  icon: Coffeescript,
};
export const CPanelTech: Technology = { name: "cPanel", icon: CPanel };
export const SwiftTech: Technology = { name: "Swift", icon: Swift };
