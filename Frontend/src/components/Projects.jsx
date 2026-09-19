import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-28">

      <div className="mx-auto max-w-6xl px-5">

        <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Projects
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Things I've built.
            </h2>

          </div>


          <p className="max-w-md text-sm leading-7 text-gray-400">
            A selection of projects that showcase my development and
            problem-solving skills.
          </p>

        </div>


        <div className="grid gap-7 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="glass group overflow-hidden rounded-3xl"
            >

              {/* Preview */}

              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-purple-500/10">

                <div className="absolute inset-0 opacity-30">

                  <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-cyan-400 blur-3xl" />

                  <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-purple-500 blur-3xl" />

                </div>


                <div className="relative w-4/5 rounded-xl border border-white/10 bg-black/50 p-3 shadow-2xl transition duration-500 group-hover:scale-105">

                  <div className="mb-3 flex gap-1.5">

                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />

                  </div>

                  <div className="space-y-2">

                    <div className="h-2 w-3/4 rounded bg-cyan-400/30" />

                    <div className="h-2 w-1/2 rounded bg-white/10" />

                    <div className="h-16 rounded-lg bg-white/5" />

                  </div>

                </div>

              </div>


              {/* Content */}

              <div className="p-7">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>


                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                <div className="mt-7 flex items-center gap-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-cyan-400"
                  >
                    <FaGithub />
                    Source
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-cyan-400"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}