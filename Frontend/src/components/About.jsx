import { motion } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const cards = [
  {
    icon: FaCode,
    title: "Clean Code",
    text: "I focus on writing clean, organized and maintainable code.",
  },
  {
    icon: FaRocket,
    title: "Performance",
    text: "I build fast and responsive experiences for users.",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solving",
    text: "I enjoy turning problems and ideas into practical solutions.",
  },
  {
    icon: FaUsers,
    title: "Teamwork",
    text: "I value communication, collaboration and continuous learning.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28">

      <div className="mx-auto max-w-6xl px-5">

        <SectionHeading
          eyebrow="About Me"
          title="Building with curiosity and purpose."
          text="I'm a BCA student focused on Full Stack Development and modern web technologies."
        />


        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="glass rounded-3xl p-7 transition"
              >

                <Icon className="text-3xl text-cyan-400" />

                <h3 className="mt-6 text-xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {card.text}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}


function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">

      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>

      <p className="mt-5 leading-7 text-gray-400">
        {text}
      </p>

    </div>
  );
}