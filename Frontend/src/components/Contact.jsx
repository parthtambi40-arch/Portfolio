import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thanks for reaching out! Connect the form to Formspree, EmailJS or your backend to receive messages."
    );
  };

  return (
    <section id="contact" className="py-28">

      <div className="mx-auto max-w-6xl px-5">

        <div className="mx-auto mb-16 max-w-2xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Let's build something.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Have a project, opportunity or idea? I'd love to hear from you.
          </p>

        </div>


        <div className="grid gap-7 lg:grid-cols-2">

          {/* Information */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="glass rounded-3xl p-8"
          >

            <h3 className="text-2xl font-bold">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm open to internships, freelance opportunities,
              collaborations and interesting development projects.
            </p>


            <div className="mt-8 space-y-6">

              <ContactItem
                icon={<FaEnvelope />}
                label="Email"
                value={personalInfo.email}
              />

              <ContactItem
                icon={<FaMapMarkerAlt />}
                label="Location"
                value={personalInfo.location}
              />

            </div>


            <div className="mt-8 flex gap-3">

              <Social
                href={personalInfo.github}
                icon={<FaGithub />}
              />

              <Social
                href={personalInfo.linkedin}
                icon={<FaLinkedin />}
              />

              <Social
                href={personalInfo.instagram}
                icon={<FaInstagram />}
              />

            </div>

          </motion.div>


          {/* Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="glass rounded-3xl p-8"
          >

            <div className="space-y-5">

              <Input
                type="text"
                placeholder="Your Name"
              />

              <Input
                type="email"
                placeholder="Your Email"
              />

              <Input
                type="text"
                placeholder="Subject"
              />


              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              />


              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-cyan-300"
              >
                Send Message

                <FaArrowRight className="transition group-hover:translate-x-1" />

              </button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  );
}


function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
    />
  );
}


function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <div>

        <p className="text-xs uppercase tracking-wider text-gray-600">
          {label}
        </p>

        <p className="mt-1 text-gray-200">
          {value}
        </p>

      </div>

    </div>
  );
}


function Social({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
    >
      {icon}
    </a>
  );
}