import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid-background relative flex min-h-screen items-center overflow-hidden"
    >

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />


      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-20 pt-32 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* Available */}

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">

            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            Available for opportunities

          </div>


          <p className="mb-3 text-lg text-gray-400">
            Hello, I'm
          </p>


          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

            Parth

            <br />

            <span className="gradient-text">
              Tambi
            </span>

          </h1>


          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">

            {personalInfo.role}

          </h2>


          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">

            {personalInfo.description}

          </p>


          {/* Buttons */}

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 font-bold text-black transition hover:bg-cyan-300"
            >
              View Projects

              <FaArrowRight className="transition group-hover:translate-x-1" />

            </a>


            <a
              href="#contact"
              className="rounded-full border border-white/10 px-6 py-3.5 font-bold transition hover:bg-white/5"
            >
              Contact Me
            </a>

          </div>


          {/* Social */}

          <div className="mt-9 flex gap-3">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href={personalInfo.linkedin}
              className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href={personalInfo.instagram}
              className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaInstagram />
            </a>

          </div>

        </motion.div>


        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative flex justify-center"
        >

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-md"
          >

            {/* Glow */}

            <div className="absolute inset-10 rounded-full bg-cyan-400/20 blur-[100px]" />


            {/* Main Card */}

            <div className="glass relative overflow-hidden rounded-[40px] p-8">

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10" />


              <div className="relative">

                {/* Code window */}

                <div className="mb-6 flex items-center gap-2">

                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />

                </div>


                <div className="rounded-3xl border border-white/10 bg-black/30 p-7">

                  <p className="font-mono text-sm text-gray-500">
                    developer.js
                  </p>


                  <div className="mt-6 space-y-3 font-mono text-sm">

                    <p>
                      <span className="text-purple-400">
                        const
                      </span>{" "}
                      <span className="text-cyan-300">
                        developer
                      </span>{" "}
                      = {"{"}
                    </p>

                    <p className="pl-5">
                      name:{" "}
                      <span className="text-green-400">
                        "Parth"
                      </span>
                    </p>

                    <p className="pl-5">
                      role:{" "}
                      <span className="text-green-400">
                        "Full Stack Developer"
                      </span>
                    </p>

                    <p className="pl-5">
                      passion:{" "}
                      <span className="text-green-400">
                        "Building"
                      </span>
                    </p>

                    <p>
                      {"}"};
                    </p>

                  </div>


                  <div className="mt-8 flex items-center justify-center gap-6">

                    <FaReact className="text-5xl text-cyan-400" />

                    <FaNodeJs className="text-5xl text-green-500" />

                  </div>

                </div>

              </div>

            </div>


            {/* Floating React */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="glass absolute -left-5 top-24 rounded-2xl p-4"
            >
              <FaReact className="text-3xl text-cyan-400" />
            </motion.div>


            {/* Floating Node */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
              className="glass absolute -right-5 bottom-24 rounded-2xl p-4"
            >
              <FaNodeJs className="text-3xl text-green-500" />
            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}