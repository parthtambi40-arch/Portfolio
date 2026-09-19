import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

import { journey } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="journey" className="py-28">

      <div className="mx-auto max-w-5xl px-5">

        <div className="mx-auto mb-16 max-w-2xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Learning. Building. Growing.
          </h2>

        </div>


        <div className="relative">

          {/* Line */}

          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent md:left-1/2" />


          <div className="space-y-16">

            {journey.map((item, index) => {

              const Icon =
                index === 0
                  ? FaGraduationCap
                  : FaCode;

              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: isRight ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`relative flex ${
                    isRight
                      ? "md:justify-end"
                      : "md:justify-start"
                  }`}
                >

                  {/* Timeline Dot */}

                  <div className="absolute left-0 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-[#030712] text-cyan-400 md:left-1/2 md:-translate-x-1/2">

                    <Icon className="text-sm" />

                  </div>


                  {/* Card */}

                  <div className="ml-14 w-full md:ml-0 md:w-[44%]">

                    <div className="glass rounded-3xl p-7">

                      <p className="text-sm font-bold text-cyan-400">
                        {item.year}
                      </p>

                      <h3 className="mt-3 text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        {item.organization}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-gray-400">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}