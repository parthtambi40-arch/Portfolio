import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

import { navLinks, personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">

      <div className="mx-auto max-w-6xl">

        <nav className="glass rounded-2xl px-5">

          <div className="flex h-16 items-center justify-between">

            {/* Logo */}

            <a
              href="#home"
              className="text-xl font-black tracking-tight"
            >
              {personalInfo.name.split(" ")[0]}

              <span className="text-cyan-400">
                .
              </span>
            </a>


            {/* Desktop */}

            <div className="hidden items-center gap-8 md:flex">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}

            </div>


            {/* Desktop CTA */}

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-400 md:flex"
            >
              Let's Talk

              <FaArrowRight className="text-xs" />
            </a>


            {/* Mobile button */}

            <button
              onClick={() => setOpen(!open)}
              className="text-xl md:hidden"
              aria-label="Toggle navigation"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

          </div>


          {/* Mobile */}

          <AnimatePresence>

            {open && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                className="overflow-hidden md:hidden"
              >

                <div className="flex flex-col gap-5 border-t border-white/10 py-6">

                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-gray-300 transition hover:text-cyan-400"
                    >
                      {link.name}
                    </a>
                  ))}

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </nav>

      </div>

    </header>
  );
}