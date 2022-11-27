import Head from "next/head";
import { CodeProjects } from "../components/content";
import Dropdown from "../components/Dropdown";
import Nav from "../components/FullNav";
import { Build, ChevronDown, Github, LinkedIn } from "../components/Icons";
import Row, { CodeRow } from "../components/Row";

export default function Coding() {
  return (
    <div>
      <Head>
        <title>Coding</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <section className="bg-darkest-gray px-10">
          <Nav />
        </section>
        <section className="bg-darkest-gray px-10">
          <div className="max-w-[800px] m-auto">
            <div className="flex flex-col justify-between md:flex-row md:items-center gap-4 pb-4">
              <h2 className="title-lg py-2 text-lightest-gray">Projects</h2>
              <Dropdown
                choices={[
                  "Python",
                  "React",
                  "Javascript",
                  "Typescript",
                  "Ruby",
                  "Ruby on Rails",
                  "C",
                  "C++",
                  "Swift",
                  "Git",
                  "Java",
                  "SQL",
                  "HTML",
                  "CSS",
                  "Tailwind",
                  "PHP",
                ]}
                placeholder={"Select technology..."}
              />
            </div>
            <div className="md:max-h-[500px] overflow-scroll">
              <CodeRow project={CodeProjects.dashboard} />
              <CodeRow project={CodeProjects.ledLamp} />
              <CodeRow project={CodeProjects.wordle} />
              <CodeRow project={CodeProjects.soi} />
              <CodeRow project={CodeProjects.getToThings} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
