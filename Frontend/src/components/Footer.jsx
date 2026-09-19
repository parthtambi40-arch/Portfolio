import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row">

        <div>

          <p className="font-bold">
            {personalInfo.name}
            <span className="text-cyan-400">
              .
            </span>
          </p>

          <p className="mt-1 text-xs text-gray-600">
            Built with React, Tailwind & Framer Motion.
          </p>

        </div>


        <div className="flex items-center gap-4">

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href={personalInfo.linkedin}
            className="text-gray-500 transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href={personalInfo.instagram}
            className="text-gray-500 transition hover:text-cyan-400"
          >
            <FaInstagram />
          </a>


          <a
            href="#home"
            className="ml-3 rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}   