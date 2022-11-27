import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import Switch from "../components/Switch";
import Nav from "../components/FullNav";
import Card from "../components/Card";
import { Code, Build, Learn, ChevronDown } from "../components/Icons";
import Content, {
  CodeProjects,
  BuildProjects,
  LearnProjects,
  NavText,
} from "../components/content";

const scrollTo2 = () => {
  window.scroll({
    top: 850,
    left: 0,
    behavior: "smooth",
  });
};

interface FavoriteProjectProps {
  key: number;
  title: string;
  desc: string;
  link: string;
}

const FavoriteProject: React.FC<FavoriteProjectProps> = ({
  key,
  title,
  desc,
  link,
}): JSX.Element => {
  return (
    <div key={key} className="py-10 px-4">
      <h3 className="text-2xl text-lightest-gray pb-6 font-bold">{title}</h3>
      <p className="text-lg py-2 text-lightest-gray">{desc}</p>
      <div className="w-full text-right">
        <Link className="text-lg py-2 link text-right" href={link}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

const FavoritesSection: React.FC = (): JSX.Element => {
  const [selected, setSelected] = useState(0);

  const favoritesSlides = [
    [
      <FavoriteProject
        key={0}
        title={CodeProjects.dashboard.title}
        desc={CodeProjects.dashboard.shortDesc}
        link={"/projects/dashboard"}
      />,
      <FavoriteProject
        key={1}
        title={CodeProjects.wordle.title}
        desc={CodeProjects.wordle.shortDesc}
        link={""}
      />,
      <FavoriteProject
        key={2}
        title={CodeProjects.ledLamp.title}
        desc={CodeProjects.ledLamp.shortDesc}
        link={""}
      />,
    ],
    [],
  ];

  return (
    <div className="flex flex-wrap md:pt-20 pb-20 items-center gap-10">
      <div className="text-center flex-grow py-20">
        <h3 className="heading-lg py-2 text-lightest-gray">My Favorite</h3>
        <Switch
          choices={[Code, Build]}
          chosen={selected}
          choose={setSelected}
        />
        <h3 className="heading-lg py-2 text-lightest-gray">Projects</h3>
      </div>
      <div className="flex-grow-[3] max-w-full md:max-w-[60%]">
        <EmblaCarousel slides={favoritesSlides[selected]} />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Logan Pfahler</title>
        <meta name="description" content="Learn about Logan Pfahler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkest-gray min-h-screen overflow-hidden">
        <section className="bg-darkest-gray px-10">
          <Nav />
          <div className="pb-6 max-w-5xl m-auto animate-appear">
            <h2 className="title-lg py-2">
              <Link className="link before:h-[3px]" href={"/about"}>
                Hi, I'm Logan
              </Link>
            </h2>
            <h3 className="subheading-lg py-2 text-lightest-gray">
              Let me show you what I can do.
            </h3>
          </div>
          <hr className="w-full md:-rotate-6 md:animate-slight-rotate m-auto" />
          <div className="pt-6 max-w-5xl m-auto">
            <h3 className="subheading-lg text-lightest-gray text-right py-2 animate-appear">
              Check out my <a className="link">resume</a>
            </h3>
          </div>
          <div className="pt-20 pb-10 flex flex-wrap gap-x-20 gap-y-10 animate-appear">
            <Card link={"/coding"}>
              <Code className="inline-block text-medium-gray text-9xl group-hover:scale-110 transition" />
              <p className="heading-md text-lightest-gray pt-8 group-hover:text-main-red transition">
                {NavText.code}
              </p>
            </Card>
            <Card link={"/building"}>
              <Build className="inline-block text-medium-gray text-9xl group-hover:scale-110 transition" />
              <p className="heading-md text-lightest-gray pt-8 group-hover:text-main-red transition">
                {NavText.build}
              </p>
            </Card>
            <Card link={"/learning"}>
              <Learn className="inline-block text-medium-gray text-9xl group-hover:scale-110 transition" />
              <p className="heading-md text-lightest-gray pt-8 group-hover:text-main-red transition">
                {NavText.learn}
              </p>
            </Card>
          </div>
          <div
            onClick={() => scrollTo2()}
            className="pb-20 justify-center cursor-pointer hidden lg:flex"
          >
            <ChevronDown className="animate-bounce text-lightest-gray text-4xl" />
          </div>
        </section>
        <section className="bg-dark-gray px-10" id="section-2">
          <FavoritesSection />
        </section>
        <section className="bg-darkest-gray px-10">
          <div className="py-6 max-w-5xl m-auto">
            <h3 className="text-2xl pt-8 text-lightest-gray text-right">
              Still here? Here's some more links!
            </h3>
          </div>
          <hr className="w-full m-0 p-0 md:rotate-6 inline-block" />
          <div className="py-40"></div>
        </section>
      </main>
    </div>
  );
}
