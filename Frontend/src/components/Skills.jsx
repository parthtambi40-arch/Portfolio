import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-28">

      <div className="mx-auto max-w-6xl px-5">

        <div className="mx-auto mb-16 max-w-2xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            My tech stack.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Technologies and tools I use while building modern web
            applications.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="glass group rounded-2xl p-6 text-center"
              >

                <Icon
                  className={`mx-auto text-4xl ${skill.color} transition group-hover:scale-110`}
                />

                <p className="mt-4 text-sm font-semibold text-gray-300">
                  {skill.name}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}