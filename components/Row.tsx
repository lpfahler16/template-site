import { useState } from "react";
import { CodeProjectType } from "./content";
import { ChevronDown, ChevronUp } from "./Icons";

interface RowProps {
  title: string;
  children: JSX.Element;
}

interface CodeRowProps {
  project: CodeProjectType;
}

export const CodeRow: React.FC<CodeRowProps> = ({ project }): JSX.Element => {
  return (
    <Row title={project.title}>
      <div className="py-6">
        <p className="text-lightest-gray">{project.shortDesc}</p>
        <div className="py-6 flex gap-8 flex-wrap">
          {project.technologies.map((t, i) => {
            const Icon = t.icon;
            return <Icon key={i} className="text-main-red text-4xl" />;
          })}
        </div>
      </div>
    </Row>
  );
};

const Row: React.FC<RowProps> = ({ title, children }): JSX.Element => {
  const [open, setOpen] = useState(false);
  const Icon = open ? ChevronUp : ChevronDown;

  return (
    <div className="border-t border-t-medium-gray px-4 ">
      <div className="flex items-center justify-between">
        <p className="text-lightest-gray py-4">{title}</p>
        <div
          className="py-4 flex-grow flex justify-end cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Icon className="text-medium-gray" />
        </div>
      </div>
      {open && children}
    </div>
  );
};

export default Row;
