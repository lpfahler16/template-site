import { Github, LinkedIn, Resume } from "./Icons";

const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="py-6 max-w-5xl m-auto">
        <h3 className="text-2xl pt-8 text-lightest-gray md:text-right">
          Still here? Here&apos;s some more links!
        </h3>
      </div>
      <hr className="w-full m-0 p-0 md:rotate-6 inline-block" />
      <div className="md:pl-3">
        <p className="text-lightest-gray pt-4 md:pt-2">
          Email:{" "}
          <a href="mailto:pfahler.l@northeastern.edu" className="link">
            pfahler.l@northeastern.edu
          </a>
        </p>
        <div className="flex text-3xl text-lightest-gray gap-5 pt-4">
          <a
            href="https://www.linkedin.com/in/logan-pfahler/"
            className="text-main-red"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/lpfahler16"
            className="text-main-red"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://drive.google.com/file/d/1I2NRx8-s0PBtxhiT8HE0nnfGmoPxd_nS/view?usp=sharing"
            className="text-main-red"
            target="_blank"
            rel="noreferrer"
          >
            <Resume />
          </a>
        </div>
      </div>
      <p className="text-center text-lightest-gray py-5 text-sm leading-7">
        Logan Pfahler • Thanks for visiting! • Copyright 2023
      </p>
    </>
  );
};

export default Footer;
